import Image from "next/image"
import QuizBox from "../../../components/QuizBox";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import LayoutArticle from "../../../components/LayoutArticle";

export default function Post() {
    const quiz = {
        title: ' Chiều của dòng điện được quy ước là chiều chuyển động của các',
        A: 'hạt mang điện dương',
        B: 'hạt mang điện âm',
        C: 'hạt electron',
        D: 'hạt neutron',
        answer: 'A'
    }
    return (
       <LayoutArticle>
    <p className="heading">Đại cương về dòng điện</p>
    <p className="heading2">1. Dòng điện, chiều của dòng điện</p>
    <p>Trong môi trường dẫn, tức là môi trường có các điện tích tự do, khi không có điện trường ngoài, các hạt mang điện tự do luôn luôn chuyển động nhiệt hỗn loạn. Khi có điện trường ngoài đặt vào, dưới tác dụng của lực điện trường <InlineMath math='\overrightarrow F  = q\overrightarrow E'></InlineMath>
    , các điện tích dương sẽ chuyển động theo chiều vectơ cường độ điện trường <InlineMath math='\overrightarrow E'></InlineMath> , còn các điện tích âm chuyển động ngược chiều với vectơ <InlineMath math='\overrightarrow E'></InlineMath> tạo nên dòng điện.</p>
    <Image src='/dong-dien/pic1.png' width={200} height={200} alt='pic1' className="mx-auto"></Image>
    <p>Vậy, dòng điện là dòng chuyển dời có hướng của các hạt mang điện. Chiều của dòng điện được quy ước là chiều chuyển động của các hạt mang điện dương.</p>
    <p>Trong các môi trường dẫn khác nhau thì bản chất của dòng điện cũng khác nhau. Bản chất của dòng điện trong kim loại là dòng chuyển dời có hướng của các electron tự đo; trong chất điện phân là dòng chuyển dời có hướng của các ion dương và ion âm; trong chất khí là dòng chuyển dời có hướng của các electron, các ion dương và âm (khi chất khí bị ion hóa); trong chất bán dẫn là dòng chuyển dời có hướng của các electron và các lỗ trống.</p>
    <p>Tuy có bản chất khác nhau, song dòng điện trong mọi môi trường luôn có các tác dụng đặc trưng cơ bản giống nhau, đó là tác dụng nhiệt, tác dụng từ, tác dụng hóa học và tác dụng sinh lí.</p>
    <p className="heading2">2. Cường độ dòng điện</p>
    <Image src='/dong-dien/pic2.png' width={200} height={200} alt='pic1' className="mx-auto"></Image>
    <p>Để định nghĩa cường độ dòng điện một cách chính xác, ta xét diện tích S vuông góc với hướng chuyển động của các điện tích như hình 3.2 (diện tích S còn gọi là tiết diện ngang). Trong thời gian <InlineMath math='\Delta t'></InlineMath> 
    , nếu điện lượng chuyển qua diện tích S là <InlineMath math='\Delta Q'></InlineMath> thì tỉ số:  <InlineMath math='I = \frac{\Delta Q}{\Delta t}'></InlineMath> (3.1)  được gọi là cường độ dòng điện trung bình qua diện tích S.</p>
    <p>Nếu xét trong thời gian  <InlineMath math='\Delta t'></InlineMath> đủ nhỏ thì giới hạn của tỉ số  <InlineMath math='\frac{\Delta Q}{\Delta t}'></InlineMath> được gọi là cường độ dòng điện tức thời qua diện tích S.</p>
    <p><InlineMath math='I = \lim_{\Delta t \to 0} \frac{\Delta Q}{\Delta t} = \frac{dQ}{dt}'></InlineMath>(3.2)</p>
    <p>Các công thức định nghĩa (3.1) và (3.2) chứng tỏ rằng, cường độ dòng điện là đại lượng vô hướng, bằng điện lượng chuyển qua diện tích S trong một đơn vị thời gian. Trong hệ đơn vị SI, đơn vị đo cường độ dòng điện là ampe (A) – là một trong bảy đơn vị cơ bản của hệ SI.</p>
    <p>Đối với dòng điện có chiều không đổi, ta gọi đó là dòng điện một chiều. Đối với dòng điện có cường độ I không đổi theo thời gian thì ta gọi đó là dòng điện không đổi. Dĩ nhiên, với dòng điện không đổi thì chiều của dòng điện cũng không đổi.</p>
    <p>Từ định nghĩa (3.2) suy ra, điện lượng <InlineMath math='\Delta Q'></InlineMath> chuyển qua tiết diện S trong thời gian <InlineMath math='\Delta t = t_1 - t_2'></InlineMath> là <InlineMath math='\Delta Q = \int_{t_1}^{t_2} dt'></InlineMath>  (3.3)</p>
    <p>Đối với dòng điện không đổi, điện lượng <InlineMath math='\Delta Q'></InlineMath> chuyển qua tiết diện S trong thời gian <InlineMath math='\Delta t'></InlineMath> được tính bởi công thức: <InlineMath math='\Delta Q = I.\Delta t'></InlineMath> hay <InlineMath math='Q = It'></InlineMath> (3.4)</p>
    <p>Lưu ý, khi ta nói dòng điện I chạy qua một vật dẫn nào đó, có nghĩa là dòng điện có cường độ I chạy qua tiết diện ngang của vật dẫn đó. Chẳng hạn, nói “dòng điện 5A chạy qua bóng đèn”, có nghĩa là dòng điện có cường độ I = 5 A chạy qua bóng đèn tiết diện ngang của dây tóc bóng đèn.</p>
    <Image src='/dong-dien/pic3.png' width={200} height={200} alt='pic1' className="mx-auto"></Image>
    <p>Cường độ dòng điện liên quan đến chuyển động của các hạt điện. Để tìm mối quan hệ này, ta xét dòng điện không đổi I chạy qua dây dẫn thẳng hình trụ có tiết diện ngang S (hình 3.3).</p>
    <Image src='/dong-dien/pic4.png' width={200} height={200} alt='pic1' className="mx-auto"></Image>
    <p>Trong thời gian <InlineMath math='\Delta t'></InlineMath>, số hạt mang điện N chuyển qua tiết diện S phải nằm trong hình trụ có chiều cao <InlineMath math='\Delta x = v_d.\Delta t'></InlineMath>
    , với <InlineMath math='v_d'></InlineMath> là thành phần vận tốc của hạt điện tính dọc theo chiều của dòng điện, còn gọi là vận tốc của chuyển động có hướng của điện tích (xem hình 3.4). Gọi <InlineMath math='n_o'></InlineMath> là mật độ hay nồng độ hạt tải điện của vật dẫn (tức là số hạt tải điện có trong một đơn vị thể tích của vật dẫn),
    <InlineMath math='\Delta V'></InlineMath> là thể tích của hình trụ đang xét thì <InlineMath math='N = n_o.\Delta V = n_oS.\Delta x = n_oSv_d.\Delta t '></InlineMath>
    </p>
    <p>Giả sử trong vật dẫn chỉ có một loại hạt tải điện thì điện lượng chuyển qua tiết diện S trong thời gian <InlineMath math='\Delta t'></InlineMath> là</p>
    <BlockMath math='\Delta Q = Nq = n_oSv_d.\Delta t.q'></BlockMath>
    <p>Do đó,cường độ dòng điện trung bình qua tiết diện S là: <InlineMath math='I = \frac{\Delta Q}{\Delta t} = n_oqv_dS'></InlineMath> (3.5)</p>
    <p>Trong đó q là điện lượng của hạt điện.</p>
    
    <p>Nguồn: <a href='https://vatlydaicuong.com/cac-khai-niem-co-ban-cua-dong-dien-khong-doi' target='_blank' rel="noreferrer">vatlydaicuong</a></p>
    <QuizBox quiz={quiz}/>
</LayoutArticle>
    )
}