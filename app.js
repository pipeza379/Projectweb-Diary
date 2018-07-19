$(function(){
    $('#append-button').on('click',function(){
        let heads = $('#head').val()
        let message = $('#message').val()    
        if (heads==="" || message ===""){
            alert("ยังใส่ไม่ครบ")
            console.log("no")
        }
        else{
            $('#box').append(`<h3>${heads}</h3><p>${message}</p><hr>`)
            $('#head').val('')
            $('#message').val('')                
        }
    })    
})