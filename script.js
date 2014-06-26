$.noConflict();

jQuery(document).ready(function ($) {

    var cfSelect = $('.cf-select');
    var cfRadio = $('.cf-radio');
    var cfCheckbox = $('.cf-checkbox');

    // select
    if(cfSelect.length>0){
        cfSelect.each(function(index){
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

    // radio
    if(cfRadio.length>0){
        cfRadio.each(function(index){
            $(this).addClass('cf-select-'+(index+1));
            $(this).find('input[type=radio]').css('display','none').before('<div class="cfs-radio" />');
            $(this).find('input[type=radio]').each(function(){
                if($(this).attr('checked')){
                    $(this).prev('.cfs-radio').addClass('checked');
                }
            });
        });
        $('.cfs-radio').on('click', function(){
            $(this).parents('.cf-radio').find('.cfs-radio').removeClass('checked').siblings('input[type="radio"]').removeAttr('checked');
            $(this).addClass('checked').siblings('input[type="radio"]').attr('checked','checked');
        });
    }

    // checkbox
    if(cfCheckbox.length>0){
        cfCheckbox.each(function(index){
            $(this).addClass('cf-checkbox-'+(index+1));
            $(this).find('input[type=checkbox]').css('display','none').before('<div class="cfs-checkbox" />');
            $(this).find('input[type=checkbox]').each(function(){
                if($(this).attr('checked')){
                    $(this).prev('.cfs-checkbox').addClass('checked');
                }
            });
        });
        $('.cfs-checkbox').on('click', function(){
            if($(this).hasClass('checked')){
                $(this).removeClass('checked').next('input[type=checkbox]').removeAttr('checked');
                return false
            }
            $(this).addClass('checked').next('input[type=checkbox]').attr('checked','checked');
        });
    }

});