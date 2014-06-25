$.noConflict();

jQuery(document).ready(function ($) {

    // selects
    if($('.cf-select').length>0){
        $('.cf-select').each(function(index){
            $(this).addClass('cf-select-'+(index+1));
            $(this).find("select").css('display','none').before('<div class="cfs-select close" />');
            var newSelect = $(this).find('.cfs-select');

            $(this).find('option').each(function(){
                var optionText = $(this).text();
                var optionVal = $(this).val();
                newSelect.append('<div class="cfs-option" data-option-value="'+optionVal+'">'+optionText+'</div>');
            });

            var cfsCurrentOptionText = $(this).find('.cfs-option').eq(0).text();
            var cfsOptionVal = $(this).find('.cfs-option').eq(0).data('option-value');
            newSelect.before('<div class="cfs-select-current" data-option-value="'+cfsOptionVal+'">'+cfsCurrentOptionText+'</div>');
        });

        $('.cfs-select-current').on('click', function(){
            if($(this).next('.cfs-select').hasClass('open')){
                $(this).next('.cfs-select').slideUp(150).removeClass('open').addClass('close');
                return false
            }
            $(this).next('.cfs-select').slideDown(150).removeClass('close').addClass('open');
        });

        $('.cfs-option').on('click', function(){
            var cfsOptionText = $(this).text();
            var cfsOptionVal = $(this).data('option-value');
            $(this).parents('.cf-select').find('.cfs-select-current').text(cfsOptionText);
            $(this).parent('.cfs-select').slideUp(150).removeClass('open').addClass('close');
            $(this).parents('.cf-select').find('select').val(cfsOptionVal);
        });
    }

});