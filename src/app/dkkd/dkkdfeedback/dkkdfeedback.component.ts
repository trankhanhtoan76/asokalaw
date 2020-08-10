import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dkkdfeedback',
    templateUrl: './dkkdfeedback.component.html',
    styleUrls: ['./dkkdfeedback.component.css']
})
export class DkkdfeedbackComponent implements OnInit {
    data = [
        {
            name: 'MR. ALLAN',
            img: '/assets/media/DKKD/feedback01.png',
            title: 'Chủ tịch công ty 1 Beauty',
            content: '1 Beauty là một doanh nghiệp chuyên phân phối mỹ phẩm nhập khẩu từ Mỹ. Asoka Law đã hỗ trợ chúng tôi ở rất nhiều giai đoạn, từ khi thành lập đầu tiên vào năm 2017, sau đó thay đổi loại hình doanh nghiệp vào năm 2018. Năm 2019 chúng tôi tiếp tục chuyển địa điểm kinh doanh. Tất cả các hoạt động này và quản trị pháp lý thường xuyên, chúng tôi đều tin tưởng giao phó cho Asoka Law.'
        },
        {
            name: 'MR. ROBERT VŨ',
            img: '/assets/media/DKKD/feedback02.png',
            title: 'Giám đốc công ty VM Nutrition',
            content: 'Công ty của tôi chuyên về sản xuất nước uống dinh dưỡng. Trong quá trình thành lập, tôi khá lo lắng vì ngành hàng F&amp;B có rất nhiều thủ tục phức tạp. Tuy nhiên Công ty Luật Asoka rất chuyên nghiệp, am hiểu về ngành hàng này nên mọi giấy phép cần thiết, Asoka Law đều tư vấn và hỗ trợ tôi thực hiện rất chi tiết. Tôi hoàn toàn hài lòng khi sử dụng các dịch vụ liên quan đến doanh nghiệp tại Asoka Law.'
        },
        {
            name: 'MR. AN',
            img: '/assets/media/DKKD/feedback03.png',
            title: 'Giám đốc công ty Laffair Asia',
            content: 'Tôi góp vốn nhằm thành lập doanh nghiệp về xuất nhập khẩu quần áo thời trang từ Hàn Quốc sang Việt Nam cùng với một đối tác người Việt Nam. Từ khi chưa thành lập cho đến lúc hoàn thiện, Công ty Luật Asoka đều cử chuyên viên và Luật sư hỗ trợ, giải đáp những khúc mắc pháp lý. Tôi hoàn toàn yên tâm khi kinh doanh tại Việt Nam với sự hỗ trợ toàn diện của Asoka Law.'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }
}
