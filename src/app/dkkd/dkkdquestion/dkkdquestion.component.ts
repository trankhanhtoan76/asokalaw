import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
    selector: 'app-dkkdquestion',
    templateUrl: './dkkdquestion.component.html',
    styleUrls: ['./dkkdquestion.component.css']
})
export class DkkdquestionComponent implements OnInit {
    contents1 = [
        {
            t: 'Về loại hình công ty',
            b: [
                {
                    t: 'Doanh nghiệp tư nhân có được mua vốn góp trong công ty khác?',
                    c: 'Không. Doanh nghiệp tư nhân không được quyền góp vốn thành lập hoặc mua cổ phần, phần vốn góp trong công ty hợp danh, công ty trách nhiệm hữu hạn hoặc công ty cổ phần.'
                },
                {
                    t: 'Công ty TNHH 1 thành viên có được huy động vốn từ người khác?',
                    c: 'Được. Khi quyết định huy động vốn từ cá nhân khác, Công ty TNHH 1 TV phải làm thủ tục chuyển đổi loại hình doanh nghiệp sang Công ty TNHH 2 thành viên trở lên hoặc Công ty cổ phần.'
                },
                {
                    t: 'Công ty TNHH 2 thành viên được phép có tối đa bao nhiêu thành viên',
                    c: 'Công ty TNHH 2 thành viên trở lên được phép có tối đa là 50 thành viên.'
                }
            ]
        },
        {
            t: 'Về địa chỉ trụ sở',
            b: [
                {
                    t: 'Có được đăng ký địa chỉ trụ sở tại chung cư?',
                    c: 'Khoản 1 Điều 6 Luật Nhà ở năm 2014 quy định “Sử dụng căn hộ chung cư vào mục đích không phải để ở” là hành vi bị nghiêm cấm, nên hiện doanh nghiệp không được kinh doanh và đặt địa chỉ trụ sở tại chung cư.'
                },
                {
                    t: 'Thành lập công ty có cần hợp đồng thuê nhà?',
                    c: 'Đối với việc thành lập doanh nghiệp Việt Nam, bạn không cần cung cấp hợp đồng thuê nhà khi thành lập công ty, tuy nhiên bạn phải cam kết trụ sở chính mà bạn đăng ký kinh doanh phải thuộc quyền sở hữu/quyền sử dụng hợp pháp của công ty và được sử dụng đúng mục đích theo quy định của pháp luật.'
                },
                {
                    t: 'Có được kinh doanh mọi ngành nghề tại trụ sở?',
                    c: 'Có một số ngành nghề nếu hoạt động tại trụ sở sẽ ảnh hưởng tới các địa bàn dân cư hay khu vực lân cận nên pháp luật quy định không được kinh doanh tại trụ sở, ví dụ: sản xuất phân bón, hoá chất, sơn, mỹ phẩm; in ấn; bán buôn nông lâm sản nguyên liệu;...'
                }
            ]
        },
        {
            t: 'Về thành viên/ chủ sở hữu công ty',
            b: [
                {
                    t: 'Ai cũng có thể làm chủ sở hữu công ty?',
                    c: 'Không. Có một số tổ chức, cá nhân không có quyền thành lập và quản lý doanh nghiệp (tức không được làm chủ sở hữu công ty) tại Việt Nam, được quy định tại Khoản 2 Điều 18 Luật Doanh Nghiệp 2014.'
                },
                {
                    t: 'Người chưa đủ 18 tuổi có được thành lập công ty?',
                    c: 'Không. Tại Việt Nam, người thành niên là người đủ 18 tuổi trở lên. Luật Doanh Nghiệp 2014 quy định: người chưa thành niên không có quyền thành lập và quản lý doanh nghiệp, vậy nếu người chưa 18 tuổi, tức là chưa thành niên thì không được thành lập công ty.'
                },
                {
                    t: 'Công ty có được phép có nhiều đại diện pháp luật?',
                    c: 'Được. Công ty trách nhiệm hữu hạn và công ty cổ phần có thể có một hoặc nhiều người đại diện theo pháp luật. Điều lệ công ty quy định cụ thể số lượng, chức danh quản lý và quyền, nghĩa vụ của người đại diện theo pháp luật của doanh nghiệp.'
                }
            ]
        }
    ];

    contents2 = [
        {
            t: 'Về tên công ty',
            b: [
                {
                    t: 'Nên đặt tên công ty như thế nào cho đúng?',
                    c: 'Đặt theo cấu trúc: "Loại hình công ty" + "tên riêng của công ty". Nên tra cứu trước tại hệ thống cổng thông tin doanh nghiệp để xem tên công ty mình dự định đặt đã bị trùng/ gây nhầm lẫn với các doanh nghiệp khác hay chưa để có phương án đặt tên đúng và không bị trùng.'
                },
                {
                    t: 'Xử lý thế nào nếu tên công ty đã bị trùng?',
                    c: 'Nên đặt thêm các thành tố phụ mang yếu tố ngành nghề để không bị trùng hoặc gây nhầm lẫn. Ví dụ: nếu tên "Công ty TNHH Thắng Lợi" đã bị trùng, bạn có thể ghép thêm yếu tố ngành nghề, trở thành "Công ty TNHH Chuyên Phân Phối Hàng Mỹ Nhập Khẩu Thắng Lợi" để tránh gây trùng/ nhầm lẫn.'
                },
                {
                    t: 'Tra cứu tên các công ty khác ở đâu?',
                    c: 'Hiện có nhiều nguồn để bạn có thể tra cứu tên các công ty khác đã được đặt trước bạn, tuy nhiên, bạn có thể vào website Cổng Thông Tin Quốc Gia Về Đăng Ký Doanh Nghiệp để có thể tra cứu tin cậy: https://dangkykinhdoanh.gov.vn'
                }
            ]
        },
        {
            t: 'Về ngành nghề kinh doanh',
            b: [
                {
                    t: 'Có được kinh doanh nghành nghề chưa đăng ký?',
                    c: 'Điều 7 Luật Doanh Nghiệp 2014 quy định: doanh nghiệp được "tự do kinh doanh trong những ngành, nghề mà luật không cấm", tuy nhiên Luật Doanh Nghiệp cũng yêu cầu: doanh nghiệp phải thông báo với Cơ quan đăng ký kinh doanh khi thay đổi về ngành, nghề kinh doanh trong thời hạn 10 ngày. Vậy để đảm bảo về nghĩa vụ, công ty vẫn buộc phải đăng ký ngành nghề đầy đủ khi muốn kinh doanh.'
                },
                {
                    t: 'Ngành nghề kinh doanh có điều kiện là gì?',
                    c: 'Là những ngành nghề mà việc đăng ký kinh doanh hoạt động buộc phải đáp ứng một số tiêu chuẩn nhất định. Tùy thuộc vào đặc thù của từng lĩnh vực mà Cơ quan quản lý sẽ đặt ra các yêu cầu riêng để doanh nghiệp tuân theo.'
                },
                {
                    t: 'Tôi có thể tra cứu mã ngành ở đâu?',
                    c: 'Hệ thống mã ngành kinh tế Việt Nam hiện được quy định tại Quyết định số: 27/2018/QĐ-TTg. Nếu bạn muốn tiện dụng hơn, có thể truy cập vào Cổng thông tin đăng ký quốc gia (dangkykinhdoanh.gov.vn), mục tra cứu ngành nghề kinh doanh để tra cứu online.'
                }
            ]
        },
        {
            t: 'Về góp vốn',
            b: [
                {
                    t: 'Có được góp vốn bằng vàng không?',
                    c: 'Được. Điều 35 Luật Doanh Nghiệp 2014 quy định: tài sản góp vốn có thể là Đồng Việt Nam, ngoại tệ tự do chuyển đổi, vàng, giá trị quyền sử dụng đất, giá trị quyền sở hữu trí tuệ, công nghệ, bí quyết kỹ thuật, các tài sản khác có thể định giá được bằng Đồng Việt Nam.'
                },
                {
                    t: 'Có được góp vốn bằng quyền sở hữu công nghệ?',
                    c: 'Được, Điều 35 Luật Doanh Nghiệp 2014 cho phép các cá nhân/ tổ chức được góp vốn bằng công nghệ/ bí quyết kỹ thuật.'
                },
                {
                    t: 'Làm sao để định giá khi góp vốn bằng công nghệ?',
                    c: 'Luật Doanh Nghiệp 2014 quy định nếu tài sản góp vốn không phải là đồng Việt Nam, ngoại tệ tự do chuyển đổi, vàng mà là bằng công nghệ thì phải được các thành viên, cổ đông sáng lập hoặc tổ chức thẩm định giá chuyên nghiệp định giá và được thể hiện thành Đồng Việt Nam.'
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
                    t: 'Company Types',
                    b: [
                        {
                            t: 'Are private enterprises allowed to purchase capital contribution from other companies? ',
                            c: 'No. Private enterprises are not allowed to contribute capital for business establishment or purchasing shares/ capital contributions in partnerships, limited liability companies, or joint stock companies. '
                        },
                        {
                            t: 'Are Single-member limited liability companies (SLLCs) allowed to raise capital contributions from others? ',
                            c: 'Yes. When deciding to do so, SLLCs must carry out procedures for converting business types into multi-member LLCs (two or more), or joint stock companies (JSCs).'
                        },
                        {
                            t: 'How many members are multiple member LLCs allowed to have in maximum? ',
                            c: 'Up to 50 members. '
                        }
                    ]
                },
                {
                    t: 'Office Addresses',
                    b: [
                        {
                            t: 'Can I register my business office at an apartment building? ',
                            c: 'According to Clause 1, Article 6 of the 2014 Law on Housing, using an apartment with non-residental purposes is prohibited. Therefore, businesses cannot establish their office addresses at apartment buildings. '
                        },
                        {
                            t: 'Do I need a tenancy contract for business establishment? ',
                            c: 'For business establishment in Vietnam, you do not need tenancy contracts. Instead, you must guarantee that the head office you register for business is under the company\'s legal ownership/ use rights and is properly used in accordance with the law. '
                        },
                        {
                            t: 'Can I do business in all lines at the headquarter? ',
                            c: 'There are some business lines not allowed to perform business at the headquater, such as: producing fertilizers, chemicals, paints, and cosmetics; printing; and selling raw materials as they will negatively affect nearby residential areas or neighborhoods. '
                        }
                    ]
                },
                {
                    t: 'Companies\' members/ owners',
                    b: [
                        {
                            t: 'Can anyone be business owners? ',
                            c: 'No. There are some organizations/ individuals that do not have any rights to set up or run businesses (meaning they cannot be business owners) in Vietnam - according to Clause 2, Article 18, the 2014 Law on Enterprises.'
                        },
                        {
                            t: 'Can individuals under 18 years old establish their companies in Vietnam? ',
                            c: 'No. As regulated in the 2014 Law on Enterprises, "any individuals under 18 are not allowed to establish and manage businesses". This means, those under 18 years old cannot set up a company on their own (they are not considered adults). '
                        },
                        {
                            t: 'Are companies allowed to have several legal representatives? ',
                            c: 'Yes. Limited liability companies and joint stock companies may have one or more legal representatives. The number of legal representatives of a business, their managerial positions, rights, and obligations are specified in the company charter.'
                        }
                    ]
                }
            ];

            this.contents2 = [
                {
                    t: 'Company Names',
                    b: [
                        {
                            t: 'How to properly name my company? ',
                            c: 'Here is the structure for naming companies: "Type of business" + "company\'s proper name". You should do a quick search at the National Business Registration Portal in advance to check whether you intended name is already used by others or can lead to confusions. '
                        },
                        {
                            t: 'What to do if the name I intend to use is already taken? ',
                            c: 'To avoid confusion or duplication, you should add elements of business lines in your company names. For example, if "Thang Loi Co., Ltd." is already taken, you can add information describing your business, changing it into " Thang Loi Imported American Goods Distributors Co., Ltd.". '
                        },
                        {
                            t: 'Where can we look up other companies\' names?',
                            c: 'Sources for searching company names are varied; however, a reliable information source is the National Business Registration Portal: https://dangkykinhdoanh.gov.vn'
                        }
                    ]
                },
                {
                    t: 'Business',
                    b: [
                        {
                            t: 'Can I run unregistered businesses? ',
                            c: 'As stipulated in Article 7 of the 2014 Law on Enterprises, enterprises are "free to perform business in lines not prohibited by the law". However, the Law on Enterprise also states that enterprises have to notify the Business Registration Agency on any changes regarding their business lines within 10 days. Therefore, enterprises still have to fully register their business lines if they want to perform related business activities. '
                        },
                        {
                            t: 'What are conditional business lines? ',
                            c: 'They are lines in which business registration must meet some specific requirements as set by respective Regulatory Agencies, depending on specific characteristics of each field. '
                        },
                        {
                            t: 'Where can I look up business codes? ',
                            c: 'Currently, Vietnamese business line codes system is specified in Decision No. 27/2018/ QD-TTg. For more convenient search, you may access the National Business Registration Portal (dangkykinhdoanh.gov.vn), and look for "enterprise search" section to look up business codes online. '
                        }
                    ]
                },
                {
                    t: 'Capital contribution',
                    b: [
                        {
                            t: 'Is it possible to contribute capital in gold? ',
                            c: 'Yes. As stipulated in Article 35 of the 2014 Law on Enterprises, capital contribution assets can be Vietnamese Dongs, freely convertible foreign currencies, gold, value of land use rights, value of intellectual property rights, technologies, technical know-hows, and other assets that can be valued in Vietnamese Dong.'
                        },
                        {
                            t: 'Is it possible to contribute capital through technology ownership?',
                            c: 'Yes. According to Article 35 of the Law on Enterprises, individuals/ organizations can contribute capital through technologies or technical know-hows.'
                        },
                        {
                            t: 'How to value assets when contributing capital through technologies? ',
                            c: 'As regulated in the Law on Enterprises 2014, if contributed assets are not Vietnamese Dongs, convertible foreign currencies, gold but are in the forms of technologies, they must be quoted and expressed in Vietnamese Dong by company members, founding shareholders, or professional valuation organizations.'
                        }
                    ]
                }
            ];
        }
    }
}
