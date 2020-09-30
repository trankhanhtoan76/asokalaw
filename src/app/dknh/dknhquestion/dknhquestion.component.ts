import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

declare var $: any;

@Component({
    selector: 'app-dknhquestion',
    templateUrl: './dknhquestion.component.html',
    styleUrls: ['./dknhquestion.component.css']
})
export class DknhquestionComponent implements OnInit {
    contents1 = [
        {
            t: 'Khái niệm',
            b: [
                {
                    t: 'Nhãn hiệu là gì?',
                    c: 'Là dấu hiệu (có thể là từ ngữ, hình ảnh hoặc từ ngữ kết hợp với hình ảnh được thể hiện bằng một hoặc nhiều màu sắc) dùng để phân biệt hàng hoá, dịch vụ của các tổ chức, cá nhân khác nhau.'
                },
                {
                    t: 'Nhãn hiệu liên kết là gì?',
                    c: 'Nhãn hiệu liên kết là các nhãn hiệu do cùng một chủ thể đăng ký, trùng hoặc tương tự nhau dùng cho sản phẩm, dịch vụ cùng loại hoặc tương tự nhau hoặc có liên quan với nhau.'
                },
                {
                    t: 'Nhãn hiệu tập thể là gì?',
                    c: 'Nhãn hiệu tập thể là nhãn hiệu dùng để phân biệt hàng hoá, dịch vụ của các thành viên của tổ chức là chủ sở hữu nhãn hiệu đó với hàng hoá, dịch vụ của tổ chức, cá nhân không phải là thành viên của tổ chức đó.'
                }
            ]
        },
        {
            t: 'Tài liệu cần có',
            b: [
                {
                    t: 'Tài liệu sao y là gì?',
                    c: 'Tài liệu sao y là việc đưa các giấy tờ (bản chính và bản photocopy) của bạn tới cơ quan có chứng năng chứng thực/ công chứng (ví dụ: Ủy ban nhân dân xã/ phường; Phòng công chứng...) để được các cơ quan đó xác nhận bản photocopy là đúng với bản chính.'
                },
                {
                    t: 'Tài liệu để đăng ký sở hữu nhãn hiệu công ty',
                    c: 'Nếu bên bạn muốn đăng ký nhãn hiệu dưới tư cách sở hữu doanh nghiệp/ hộ kinh doanh, xin vui lòng cung cấp: (1) - bản sao y không quá 03 tháng Giấy đăng ký kinh doanh; (2) chứng minh nhân dân sao y không quá 03 tháng của người đại diện pháp luật doanh nghiệp; (3) - mẫu thiết kế nhãn hiệu chính xác và giải thích ý nghĩa/ mô tả nhãn hiệu (nếu có).'
                },
                {
                    t: 'Tài liệu để đăng ký sở hữu nhãn hiệu cá nhân?',
                    c: 'Nếu bên bạn muốn đăng ký nhãn hiệu dưới tư cách sở hữu cá nhân, xin vui lòng cung cấp: (1) - bản sao chứng minh nhân dân sao y không quá 03 tháng của chủ sở hữu nhãn hiệu; (2) - mẫu thiết kế nhãn hiệu chính xác và giải thích ý nghĩa/ mô tả nhãn hiệu (nếu có).'
                }
            ]
        },
        {
            t: 'Quy trình xử lý',
            b: [
                {
                    t: 'Việc xử lý hồ sơ tại Tp. Hồ Chí Minh như thế nào?',
                    c: 'Sau đây là quy trình Asoka Law xử lý hồ sơ đối với khách hàng tại Tp. Hồ Chí Minh:\n' +
                        '\n' +
                        '\n' +
                        'Bước 1: Kiểm tra nhãn hiệu\n' +
                        'Khách hàng gửi logo/ nhãn hiệu qua email consult@asokalaw.vn, Asoka kiểm tra trong vòng 30 phút. Nếu nhãn hiệu đủ điều kiện đăng ký, chúng tôi sẽ thông báo và gửi Hợp đồng tới Quý khách. Hai Bên ký hợp đồng/ chuyển phí/ các tài liệu cần thiết.\n' +
                        ' \n' +
                        'Bước 2: Soạn thảo hồ sơ\n' +
                        'Asoka Law soạn thảo hồ sơ và cử chuyên viên đến trụ sở/ địa chỉ khách hàng yêu cầu nhằm ký và nhận hồ sơ. Hồ sơ được nộp tới Cục Sở Hữu Trí Tuệ trong vòng 24 giờ kể từ thời điểm khách hàng ký.\n' +
                        ' \n' +
                        'Bước 3: Bàn giao tài liệu\n' +
                        'Asoka Law gửi hồ sơ đã được đăng ký về lại địa chỉ trụ sở Quý khách yêu cầu kèm Biên bản bàn giao. Asoka Law có trách nhiệm theo dõi hồ sơ và xử lý các vấn đề phát sinh cho đến khi khách hàng nhận được Giấy chứng nhận đăng ký nhãn hiệu.'
                },
                {
                    t: 'Việc xử lý hồ sơ ngoài Tp. Hồ Chí Minh như thế nào?',
                    c: 'Sau đây là quy trình Asoka Law xử lý hồ sơ đối với khách hàng ngoài Tp. Hồ Chí Minh:\n' +
                        '\n' +
                        'Bước 1: Kiểm tra nhãn hiệu\n' +
                        '\n' +
                        'Khách hàng gửi logo/ nhãn hiệu qua email consult@asokalaw.vn Asoka Law kiểm tra trong vòng 30 phút. Nếu nhãn hiệu đủ điều kiện đăng ký, chúng tôi sẽ thông báo và gửi Hợp đồng tới Quý khách. Hai Bên ký hợp đồng/ chuyển phí/ các tài liệu cần thiết.\n' +
                        '\n' +
                        '\n' +
                        'Bước 2: Soạn thảo hồ sơ\n' +
                        '\n' +
                        'Asoka Law soạn thảo hồ sơ/ hướng dẫn khách hàng ký hồ sơ. Khách hàng in hồ sơ và ký theo hướng dẫn, sau đó chuyển hồ sơ cùng hợp đồng về địa chỉ trụ sở của Asoka Law. Chúng tôi sẽ nộp hồ sơ của Quý khách tới Cục Sở Hữu Trí Tuệ trong vòng không quá 24 giờ, kể từ thời điểm nhận hồ sơ.\n' +
                        ' \n' +
                        '\n' +
                        'Bước 3: Bàn giao tài liệu\n' +
                        '\n' +
                        'Asoka Law gửi hồ sơ đã được đăng ký về lại địa chỉ trụ sở Quý khách yêu cầu kèm Biên bản bàn giao. Asoka Law có trách nhiệm theo dõi hồ sơ và xử lý các vấn đề phát sinh cho đến khi khách hàng nhận được Giấy chứng nhận đăng ký nhãn hiệu.'
                },
                {
                    t: 'Quy trình xử lý đơn tại Cục SHTT như thế nào?',
                    c: 'Đơn đăng ký nhãn hiệu được xử lý tại Cục Sở Hữu Trí Tuệ theo trình tự như sau:\n' +
                        '\n' +
                        '    Bước 1: Nhận hồ sơ và thẩm định hình thức:\n' +
                        '\n' +
                        'Là việc đánh giá tính hợp lệ của đơn theo các yêu cầu về hình thức,về đối tượng loại trừ, về quyền nộp đơn… để từ đó đưa ra kết luận đơn hợp lệ hay không hợp lệ. Thời gian thẩm định hình thức là 1 tháng kể từ ngày nộp đơn.\n' +
                        ' \n' +
                        'Bước 2: Đăng công báo:\n' +
                        'Đơn đăng ký nhãn hiệu được chấp nhận là hợp lệ được công bố trên Công báo SHCN trong thời hạn 2 tháng kể từ ngày được chấp nhận là đơn hợp lệ. Nội dung công bố đơn đăng ký nhãn hiệu là các thông tin liên quan đến đơn hợp lệ ghi trong thông báo chấp nhận đơn hợp lệ, mẫu nhãn hiệu và danh mục hàng hóa, dịch vụ kèm theo.\n' +
                        ' \n' +
                        'Bước 3: Thẩm định nội dung:\n' +
                        'Đơn đăng ký nhãn hiệu đã được công nhận là hợp lệ được thẩm định nội dung để đánh giá khả năng cấp Giấy chứng nhận đăng ký nhãn hiệu cho đối tượng nêu trong đơn theo các điều kiện bảo hộ. Thời hạn thẩm định nội dung đơn nhãn hiệu là 9 tháng kể từ ngày công bố đơn.\n' +
                        ' \n' +
                        'Bước 4: Thu phí cấp Giấy chứng nhận đăng ký nhãn hiệu:\n' +
                        'Sau khi thẩm định nội dung Cục Sở Hữu Trí Tuệ yêu cầu chủ sở hữu nhãn hiệu tiến hành nộp phí cấp văn bằng. Chủ sở hữu nộp phí và chờ cấp Giấy chứng nhận đăng ký nhãn hiệu.\n' +
                        ' \n' +
                        'Bước 5: Cấp Giấy chứng nhận đăng ký nhãn hiệu:\n' +
                        'Sau 02 tháng kể từ ngày nộp phí cấp giấy chứng nhận đăng ký nhãn hiệu. Chủ sở hữu nhãn hiệu nhận Giấy chứng nhận đăng ký nhãn hiệu sau 1 - 1,5 năm kể từ ngày nộp đơn.'
                }
            ]
        }
    ];
    contents2 = [
        {
            t: 'Thời gian',
            b: [
                {
                    t: 'Thời gian bảo hộ nhãn hiệu của tôi bao lâu?',
                    c: 'Thời gian đăng ký thành công việc bảo hộ nhãn hiệu thông thường mất khoảng 1-1,5 năm, tùy thuộc vào số lượng hồ sơ nộp và tốc độ xử lý của nhân viên tại Cục SHTT mà hồ sơ có thể ra văn bằng sớm hay trễ hơn thời gian trên.'
                },
                {
                    t: 'Hình như tôi thấy bên khác làm nhanh hơn',
                    c: 'Không thể có bên khác làm nhanh hơn, bởi tất cả các bên đại diện để đăng ký nhãn hiệu đều chỉ có vai trò là người nộp đơn giùm anh/chị, còn cơ quan xử lý là Cục Sở Hữu Trí Tuệ. Thời gian xử lý đơn phụ thuộc vào số lượng hồ sơ mà các nhân viên cục phải xử lý nên có thể xê xích như trên.'
                },
                {
                    t: 'Văn bằng bảo hộ có thời hạn bao lâu?',
                    c: 'Văn bằng bảo hộ được cấp có thời hạn 10 năm (kể từ thời điểm nhận đơn). Hết thời hạn này, anh chị có thể gia hạn thêm.'
                }
            ]
        },
        {
            t: 'Kiểm tra nhãn hiệu',
            b: [
                {
                    t: 'Tự kiểm tra nhãn hiệu ở đâu?',
                    c: 'Bạn có thể tự kiểm tra nhãn hiệu của mình đã có ai đăng ký trước, hoặc gây trùng/ gây nhầm lẫn với các bên khác hay chưa tại Thư Viện Số Về Sở Hữu Công Nghiệp của Cục Sở hữu Trí Tuệ Việt Nam theo đường link như sau:\n' +
                        '\n' +
                        'http://iplib.noip.gov.vn/WebUI/WLogin.php '
                },
                {
                    t: 'Làm sao biết nhãn hiệu có đủ điều kiện đăng ký?',
                    c: 'Để nhận biết nhãn hiệu của bạn có đủ điều kiện đăng ký độc quyền nhãn hiệu hay không, bạn cần xác định:\n' +
                        '\n' +
                        '1. Liệu nhãn hiệu của bạn đã là một nhãn hiệu đúng? (nhãn hiệu là dấu hiệu được cấu thành bởi từ ngữ, hình ảnh hoặc từ ngữ kết hợp với hình ảnh, được thể hiện bằng một hoặc nhiều màu sắc).\n' +
                        '\n' +
                        '2. Liệu nhãn hiệu của bạn có khả năng để phân biệt hàng hóa, dịch vụ của mình với hàng hóa, dịch vụ cùng loại của các doanh nghiệp khác?\n' +
                        '\n' +
                        'Nếu đủ 02 yếu tố như trên, nhãn hiệu của bạn có thể tiến hành đăng ký độc quyền nhãn hiệu.'
                },
                {
                    t: 'Asoka Law có kiểm tra nhãn hiệu miễn phí?',
                    c: 'Có! Asoka Law sẽ hỗ trợ khách hàng kiểm tra nhãn hiệu có đạt đủ điều kiện đăng ký độc quyền hay không, đồng thời đưa ra các tư vấn sơ bộ miễn phí. (Thông thường việc kiểm tra nhãn hiệu này trên thị trường sẽ có thu phí, dao động ở nhiều mức giá khác nhau).'
                }
            ]
        },
        {
            t: 'Cách thức thanh toán',
            b: [
                {
                    t: 'Tôi muốn thanh toán tiền mặt có được không?',
                    c: 'Được. Asoka Law chấp nhận thanh toán bằng tiền mặt đối với khách hàng tại Tp. Hồ Chí Minh.\n' +
                        '\n' +
                        'Với Quý khách có nhu cầu chi trả dịch vụ bằng tiền mặt, xin vui lòng yêu cầu nhân viên Asoka Law xuất trình Phiếu thanh toán có chữ ký của người đại diện pháp luật và con dấu của Công ty Luật TNHH Asoka Law. Chúng tôi sẽ cử nhân viên thu tiền tại địa điểm thuận tiện nhất cho Quý khách.'
                },
                {
                    t: 'Tôi muốn thanh toán bằng chuyển khoản thì sao?',
                    c: 'Asoka Law chấp thuận hình thức thanh toán chuyển khoản.\n' +
                        '\n' +
                        'Với cá nhân yêu cầu xuất hóa đơn dịch vụ, Quý khách vui lòng chuyển khoản giá trị Hợp đồng vào số tài khoản như sau: \n' +
                        '\n' +
                        '·      Số tài khoản: 210571109\n' +
                        '\n' +
                        '·      Tên chủ tài khoản: Dương Nữ Cẩm Tâm\n' +
                        '\n' +
                        '\n' +
                        '·      Ngân hàng Thương Mại Cổ Phần Á Châu (ACB Bank) – Chi nhánh Nguyễn Văn Trỗi'
                }
            ]
        }
    ];

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
        if (this.global.locale != 'vi') {
            this.contents1 = [
                {
                    t: 'DEFINITION',
                    b: [
                        {
                            t: 'What is a trademark?',
                            c: 'A sign (can be words, images or words combined with images expressed in one or more colors) used to distinguish goods and services of different organizations and individuals.'
                        },
                        {
                            t: 'What are associated trademarks?',
                            c: 'Associated trademarks are trademarks registered by the same entity, identical or similar to one another, used for products or services of the same type or related.'
                        },
                        {
                            t: 'What are group logos?',
                            c: 'Group logos are trademarks used to distinguish goods and services of members of the organizations that own such trademarks with goods and services of other organizations/ individuals.'
                        }
                    ]
                },
                {
                    t: 'NEEDED DOCUMENTS',
                    b: [
                        {
                            t: 'What are certified copies?',
                            c: 'Certified copies are photocopied documents that have been sent to authorities such as People\'s Committee of the commune/ ward or notary offices to be confirmed as true to the original.'
                        },
                        {
                            t: 'Documents for company trademark registration',
                            c: 'If you want to register a trademark as a business owner, please provide: (1) - a certified copy of business registration certificate not exceeding 03 months; (2) ID card of the business\'s legal representative not exceeding 3 months ; (3) - accurate logo design and its meaning explanation/ description (if any).'
                        },
                        {
                            t: 'Documents for individual trademark registration',
                            c: 'If you want to register a logo as a personal property, please provide: (1) - a copy of your ID card no more than 3 months; (2) - accurate logo design and meaning explanation / logo description (if any).\n' +
                                '\n'
                        }
                    ]
                },
                {
                    t: 'TRADEMARK CHECKING',
                    b: [
                        {
                            t: 'Where to check logos on my own?',
                            c: 'You can check whether your trademark has been registered before, or whether it is similar/ causes confusions with other parties at the Intellectual Property Department\'s Digital Library of Industrial Property by the following link: http://iplib.noip.gov.vn/WebUI/WLogin.php'
                        },
                        {
                            t: 'How to know if a logo is eligible for registration?',
                            c: 'To know whether your logo is eligible for exclusive logo registration, you need to determine: 1. Is your logo truly a logo (a sign made of words, images or words associated with images, expressed in one or more colors)? 2. Is your logo able to differentiate its goods and services from other businesses\' goods and services of the same type? If the anwers to the above questions are yes, you can register your logo for protection.'
                        },
                        {
                            t: 'Does Asoka Law offer free logo checking?',
                            c: 'Asoka Law will assist customers to check whether their logos are eligible for exclusive registration, and offer free preliminary advice. (Usually logo checkup will cost a fee on the market, with different prices).'
                        }
                    ]
                }
            ];
            this.contents2 = [
                {
                    t: 'DURATION',
                    b: [
                        {
                            t: 'How long does it take to protect my trademark?',
                            c: 'It usually takes about 1-1.5 years to apply for a successful trademark protection registration. However, depending on the number of applications submitted and the processing speed of staff at the NOIP, the application can be issued earlier or later than the time mentioned above.'
                        },
                        {
                            t: 'It seems that other companies do this faster?',
                            c: 'It is impossible for other parties to do faster, because all representatives to register trademarks only apply on your behalf (therefore are applicants), and the handling agency is the NOIP. Time spent on handling applications depends on the number of records that NOIP\'s staff must handle, so it might change a little.'
                        },
                        {
                            t: 'How long does protection certificate last?',
                            c: 'Protection title is valid for 10 years from the time the application is received. When this period is over, you can extend it.'
                        }
                    ]
                },
                {
                    t: 'HANDLING PROCESS',
                    b: [
                        {
                            t: 'Application handling process in Ho Chi Minh City?',
                            c: 'Following is the process of how Asoka Law handle records for customers in Ho Chi Minh City. Step 1: Logo Checking Customers send logos via email consult@asokalaw.vn, and Asoka will check within 30 minutes. If the logo is eligible for registration, we will notify and send the Contract to customers. The two parties sign contracts, transfer fees and necessary documents. Step 2: Prepare applications Asoka Law draft applications and send specialists to clients\' offices/ places of request to sign and receive applications. The applications are submitted to the National Office of Intellectual Property within 24 hours from the time the customer signs. Step 3: Hand over the applications Asoka Law sends the registered applications back to the customers together with handover minutes. Asoka Law is responsible for monitoring the records and handling problems arising until customers receive the Certificate of Trademark Registration.'
                        },
                        {
                            t: 'Application handling process outside Ho Chi Minh City?',
                            c: 'Following is the process of how Asoka Law handle records for customers not in Ho Chi Minh City: Step 1: Logo Checking Customers send logos via email consult@asokalaw.vn, and Asoka will check within 30 minutes. If the logo is eligible for registration, we will notify and send Contracts to customers. The two parties sign contracts, transfer fees and necessary documents. Step 2: Prepare applications Asoka Law draft applications/ instruct customers to sign the applications. Customers print applications and sign as instructed, after that deliver applications and contracts to the address of Asoka Law. The applications will be submitted to the National Office of Intellectual Property within 24 hours from the time Asoka receive them. Step 3: Hand over the applications Asoka Law sends the registered applications back to the customers together with handover minutes. Asoka Law is responsible for monitoring the records and handling problems arising until customers receive the Certificate of Trademark Registration.'
                        },
                        {
                            t: 'Application handling process at the National Office of Intellectual Property?',
                            c: 'Trademark registration applications are processed at the National Office of Intellectual Property in the following order: Step 1: Form Verification: Assessing the validity of application according to the requirements about form, excluded objects, and the right to apply... from which to decide whether the applications are valid or invalid. Evaluation time is 1 month from the filing date. Step 2: Publication of valid applications: Trademark applications accepted as valid are published in the Industrial Property Gazette within 2 months from the date of being accepted as a valid. The publications are information related to valid applications stated in notices on acceptance of valid applications, trademark samples and lists of accompanied goods and services. Step 3: Content evalulation Valid applications recognized as valid shall be evaluated in terms of content to assess the possibility of granting a Trademark Registration Certificate to the object stated in the applications under protection conditions. The time limit for evaluating trademark application contents is 9 months from the date of publishing of the applications.'
                        }
                    ]
                },
                {
                    t: 'PAYMENT METHODS',
                    b: [
                        {
                            t: 'Can I pay in cash?',
                            c: 'Yes. Asoka Law accepts payment in cash for clients in Ho Chi Minh City. For clients wishing to pay for services in cash, please ask Asoka Law staff to show Payment Note signed and sealed by Asoka Law\'s legal representative. We will assign staff to collect money at the location required by customers.'
                        },
                        {
                            t: 'Can I pay via bank transfer?',
                            c: 'Asoka Law accepts bank transfer for payment. For individuals who require invoices for service, please transfer the Contract value to the following account number: · Account number: 210571109 · Account holder: Duong Nu Cam Tam · Asia Commercial Joint Stock Bank (ACB) - Nguyen Van Troi branch'
                        },
                        {
                            t:'Payment methods for businesses?',
                            c:'For businesses that require VAT invoices for the service package, please transfer the contract value to the following account number: · Account number: 15087968 · Account holder\'s name: Asoka Law Co., Ltd. · Asia Commercial Joint Stock Bank (ACB) - HCMC branch, An Phu Transaction Office;'
                        }
                    ]
                }
            ];
        }
    }

}
