function handlePrefsModal() {
    $('.btn-open-settings').on('click', function(){

        $('.prefs').show();
    });
    $('.btn-close-settings').on('click', function(){
        $('.prefs').hide();
    });
}

$(document).ready(function(){
    handlePrefsModal();
});
