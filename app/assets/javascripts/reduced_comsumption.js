var buildQuizHTML = function(quiz) {
    var html = `<div class="quiz">
                <div class="quiz__text">
                  <p>
                    ${quiz.example}
                  </p>
                </div>
                <div class="quiz__yes-no clearfix">
                <p>上記は軽減税率に適用される？？
                  <div class="yes" id="yes-button" data-answer=true>
                    <i class="fas fa-thumbs-up yes__icon"></i>
                    <p>YES</p>
                  </div>
                  <div class="no" id="no-button" data-answer=false>
                    <i class="fas fa-thumbs-down no__icon"></i>
                    <p>NO</p>
                  </div>
                </div>
              </div>`;
    return html;
}

var buildAnswerHTML = function(ans, ans_text) {

    var html = `<div class="explanation">
                <p>
                  ${ans_text}
                </p>
                <p>
                  ${ans.explanation}
                </p>
              </div>`
    return html;
}

$(document).on('turbolinks:load', function() {
    var start_button = document.getElementById('start-button');
    var ans_data;
    if (start_button) {
        start_button.addEventListener('click', function(e) {
            e.preventDefault();
            var quiz_data = document.getElementById('quiz-form');
            var formData = new FormData(quiz_data);
            var url = $(quiz_data).attr('action');
            $.ajax({
                    url: url,
                    type: "POST",
                    data: formData,
                    dataType: 'json',
                    processData: false,
                    contentType: false
                })
                .done(function(data) {
                    start_button.value = "もう一度"
                    $('.quiz').remove();
                    $('.explanation').remove();
                    var html = buildQuizHTML(data);
                    $('#quiz-content').append(html);
                    ans_data = data;
                })
        });
    }

    $(document).on('click', '#yes-button', function() {
        $('.explanation').remove();
        var answer_text;
        if ($(this).attr('data-answer') == ans_data.answer) {
            answer_text = "正解!!"
        } else {
            answer_text = "不正解..."
        }
        var html = buildAnswerHTML(ans_data, answer_text);
        $('#quiz-content').append(html);
    });

    $(document).on('click', '#no-button', function() {
        $('.explanation').remove();
        var answer_text;
        if ($(this).attr('data-answer') == ans_data.answer) {
            answer_text = "正解!!"
        } else {
            answer_text = "不正解..."
        }
        var html = buildAnswerHTML(ans_data, answer_text);
        $('#quiz-content').append(html);
    });
});