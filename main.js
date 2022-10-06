
$(function (){

    const btn = $('.btnGotoForm')

    btn.on('click',function(){
        let option = $('input[name=radioName]:checked', '#myForm').val();
        if(option === undefined){
            alert('Debes seleccionar una opcion');
            return false;
        }

        switch(option){
            case '1':
                alert(1)
                window.location.href = "/form.html";
            break;
            case '2':
                alert(2)
            break;
            case '3':
                alert(3)
            break;
            default:
                return false;
            break;
        }
    });
});