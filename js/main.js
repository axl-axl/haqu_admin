    //图片上传
    function uploader(btn,opacity){
        opacity? opacity=opacity :opacity =0;
		var uploader = WebUploader.create({
            // 选完文件后，是否自动上传。
            auto: true,
            // swf文件路径
            swf: './lib/webuploader/Uploader.swf',
            // 文件接收服务端。
            server: './lib/webuploader/server/fileupload.php',
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: btn,
            duplicate :true,
            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        });
        uploader.on('fileQueued', function( file ) {
        	// uploader.on('uploadStart',function(file){
                console.log(file)
            var $li = $(
                    '<div id="' + file.id + '" class="file-item thumbnail">' +
                        '<img>' +
                        '<input type="hidden" name="app_img" value="'+file.name+'">'+
                        '<div class="remove_substr"></div>'+
                    '</div>'
                    ),
            	
                $img = $li.find('img');
            $('#imgShow').html( $li );
            if(opacity){
                $(btn).css('opacity','0');
            }
            uploader.makeThumb( file, function( error, src ) {
                if ( error ) {
                    $img.replaceWith('<span>不能预览</span>');
                    return;
                }
                $img.attr( 'src', src );
            }, 276, 298 );
        });
    }
function uploaderlist(btn,opacity){
        opacity? opacity=opacity :opacity =0;
        var uploader = WebUploader.create({
            // 选完文件后，是否自动上传。
            auto: true,
            // swf文件路径
            swf: './lib/webuploader/Uploader.swf',
            // 文件接收服务端。
            server: './lib/webuploader/server/fileupload.php',
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: btn,
            duplicate :true,
            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        });
        uploader.on( 'fileQueued', function( file ) {
            // uploader.on('uploadStart',function(file){
                console.log(file)
            var $li = $(
                    '<div id="' + file.id + '" class="file-item thumbnail add_box">' +
                        '<img>' +
                        '<input type="hidden" name="app_img[]" value="'+file.name+'">'+
                        '<div class="remove_substr"></div>'+
                    '</div>'
                    ),
                
                $img = $li.find('img');
            $('.img_in').append( $li );
            if(opacity){
                $(btn).css('opacity','0');
            }
            uploader.makeThumb( file, function( error, src ) {
                if ( error ) {
                    $img.replaceWith('<span>不能预览</span>');
                    return;
                }
                $img.attr( 'src', src );
            }, 276, 298 );
        });
    }