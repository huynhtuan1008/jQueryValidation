$().ready(function() {
	$("#demoForm").validate({
		rules: {
			"email": {
				required: true,
				email: true
			},
			"password": {
				required: true,
				rangelength:[8,16]
			},
		},
        messages: {
            email: { required: "Không để trống !" , email: "Vui lòng nhập email"},
            password: { required: "Không để trống !", rangelength: "Hãy nhập password từ 8 đến 16 ký tự" },
            
        },
	});
});