function handlePrefsModal() {
    $('.btn-open-prefs').on('click', function(){
        $('.prefs').show();
    });
    $('.btn-close-prefs').on('click', function(){
        $('.prefs').hide();
    });
}

$(document).ready(function(){
    handlePrefsModal();
});
