$(function() {
  $('#radios').on('change', 'input:radio', function() {
     $('#blocks div').hide().eq($(this).index()).show();
  })
});