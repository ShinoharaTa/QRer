var tipData = new Vue({
    el: '#formdata',
    computed: {
        text: function() {
            return encodeURI(this.setText);
        },
    },
    data: {
        setText: "",
        notset: true
    },
    methods: {
        clearNotImage: function() {
            this.notset = false;
        }
    }
});

$('#setText').on('click', function() {
    console.log(tipData.text);
    $("#generatedQR").html("");
    $("#generatedQR").qrcode({ width: 240, height: 240, text: tipData.text });
});