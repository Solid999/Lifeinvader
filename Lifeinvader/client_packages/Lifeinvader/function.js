$(function discord(webhook){
    $('#btn').click(function(){    
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});
    });
});

function interm(){
    setTimeout(()=>{
        mp.trigger('startlifeinvader')
    },1000)
}

document.onkeyup = function(e) {
    if (e.keyCode == 27) {
        mp.trigger('closeLifeinvader')
    }
}