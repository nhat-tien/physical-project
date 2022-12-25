import LayoutArticle from "../../../components/LayoutArticle"
import Image from "next/image"
import QuizBox from "../../../components/QuizBox";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Post() {
    return (
        <LayoutArticle>
            <p className="heading">Tương tác từ - Định luật Ampère </p>
        <p className="heading2">1. Tương tác từ</p>
        <p>Các hiện tượng về điện, từ đã được con người biết đến từ lâu, nhưng không biết chúng có liên quan với nhau. Mãi đến năm 1820, khi Oersted, nhà vật lý người Đan Mạch, phát hiện ra hiện tượng dòng điện đặt gần kim la bàn làm kim la bàn không chỉ theo hướng Bắc – Nam nữa mà bị lệch đi thì người ta mới biết rằng giữa điện và từ có mối liên quan đến nhau. Sau đó Ampère, nhà vật lý người Pháp, phát hiện rằng, các dòng điện cũng tương tác với nhau.</p>
        <p>Như vậy, về phương diện từ thì một dòng điện cũng có thể coi như một nam châm. Nói cách khác tương tác giữa nam châm với nam châm, nam châm với dòng điện, dòng điện với dòng điện có cùng chung một bản chất. Ta gọi đó là tương tác từ.</p>
        <p className="heading2">2. Định luật Ampère về tương tác giữa hai phần tử dòng điện</p>
        <p>Xét dòng điện I chạy trong dây dẫn có tiết diện ngang S rất nhỏ. Trên dây dẫn đó, lấy một độ dời vi phân <InlineMath math='\overrightarrow{d\ell}'></InlineMath>
        theo chiều của dòng điện. Ta gọi tích số  <InlineMath math='I\overrightarrow{d\ell}'></InlineMath> là một phần tử dòng điện hay một yếu tố dòng điện. Phần tử dòng điện là đại lượng vectơ có độ lớn bằng <InlineMath math='Id\ell'></InlineMath>
        , có phương tiếp tuyến với dây dẫn tại điểm khảo sát và có chiều của dòng điện (hình 4.1)
        </p>
        <Image src='/ampere/pic1.png' width={200} height={200} alt='pic1' className="mx-auto"></Image>
        <p>Xét hai phần tử dòng điện <InlineMath math='I_1\overrightarrow{d\ell_1}'></InlineMath> và <InlineMath math='I_2\overrightarrow{d\ell_2}'></InlineMath> của hai dòng điện I1 và I2 đặt trong chân không. Gọi <InlineMath math='\overrightarrow{r}'></InlineMath>là vectơ khoảng cách hướng từ 
        <InlineMath math='I_1\overrightarrow{d\ell_1}'></InlineMath> đến <InlineMath math='I_2\overrightarrow{d\ell_2}'></InlineMath>. Vẽ mặt phẳng (P) chứa <InlineMath math='I_1\overrightarrow{d\ell_1}'></InlineMath> và <InlineMath math='\overrightarrow{r}'></InlineMath> . Quy ước pháp vectơ đơn vị  
        <InlineMath math='\overrightarrow n'></InlineMath> của mặt phẳng (P) có chiều sao cho khi xoay cái đinh ốc từ vectơ <InlineMath math='I_1\overrightarrow{d\ell_1}'></InlineMath> đến vecto <InlineMath math='\overrightarrow r'></InlineMath> theo góc nhỏ nhất thì chiều tiến của cái đỉnh ốc là chiều của vectơ <InlineMath math='\overrightarrow n'></InlineMath> (hình 4.2).</p>
        <Image src='/ampere/pic2.png' width={200} height={200} alt='pic1' className="mx-auto"></Image>
        <p>Lực tương tác giữa hai phần tử dòng điện này tuân theo định luật Ampère: lực từ do phần tử dòng điện <InlineMath math='I_1\overrightarrow{d\ell_1}'></InlineMath> tác dụng lên phần tử dòng điện <InlineMath  math='I_2\overrightarrow{d\ell_2}'></InlineMath> là một vectơ  <InlineMath math='d\overrightarrow F'></InlineMath> có:</p>
        <p>+ Phương: vuông góc với mặt phẳng chứa yếu tố dòng <InlineMath  math='I_2\overrightarrow{d\ell_2}'></InlineMath> và vecto <InlineMath math='\overrightarrow n'></InlineMath></p>
        <p>+ Chiều: xác định theo quy tắc cái định ốc &quot;xoay cái đinh ốc từ <InlineMath  math='I_2\overrightarrow{d\ell_2}'></InlineMath> đến vectơ <InlineMath math='\overrightarrow n'></InlineMath> theo góc nhỏ nhất thì chiều tiến của cái đinh ốc là chiều của vectơ <InlineMath math='d\overrightarrow F'></InlineMath>&quot;</p>
        <p>+ Độ lớn: <InlineMath math='dF = \frac{\mu_0I_1I_2d\ell_1d\ell_2\sin{\theta_1}\sin{\theta_2}}{4\pi r^2}'></InlineMath> (4.1)</p>
        <p>+ Điểm đặt: tại yếu tố dòng <InlineMath math='I_2\overrightarrow{dl_2}'></InlineMath></p>
        <p>Trong (4.1), <InlineMath math='\mu_0'></InlineMath> là hằng số từ, có giá trị: <InlineMath math='\mu_0 = 4\pi .10^{-7} H/m'></InlineMath></p>
        <p>Thực nghiệm chứng tỏ rằng, nếu hai dòng điện và I2 đặt trong môi trường đồng chất đẳng hướng thì lực từ tăng  <InlineMath math='\mu'></InlineMath> lần so với khi chúng đặt trong chân không:</p>
        <p><InlineMath math='d\overrightarrow F = \mu .d\overrightarrow F_{ck} = \frac{\mu_0 \mu}{4\pi} \frac{I_2\overrightarrow{d\ell_2}\times (I_1\overrightarrow{d\ell_1} \times \overrightarrow r) }{r^3}'></InlineMath></p>
        <p>Hệ số  <InlineMath math='\mu'></InlineMath> được gọi là hệ số từ thẩm hay độ từ thẩm của môi trường. Đối với chân không thì <InlineMath math='\mu = 1'></InlineMath> ; các chất sắt từ thì  <InlineMath math='\mu > > 1'></InlineMath> ; đối với các chất thuận từ hoặc nghịch từ giá trị <InlineMath math='\mu'></InlineMath> dao động hơn kém xung quanh đơn vị một lượng nhỏ ( <InlineMath math='\mu \approx 1'></InlineMath>) . Vì thế, trong đa số các trường hợp, ta bỏ qua hệ số <InlineMath math='\mu'></InlineMath></p>
        <p>Về hình thức, điện và từ giống như hai bàn tay của một cơ thể người. Mỗi đại lượng đặc trưng cho điện đều tương ứng với một đại lượng đặc trưng cho từ. Ví dụ: hằng số điện  <InlineMath math='\varepsilon_0'></InlineMath> tương ứng với hằng số từ <InlineMath math='\mu_0'></InlineMath> ; hệ số điện môi <InlineMath math='\varepsilon'></InlineMath> tương ứng với hệ số từ thẩm <InlineMath math='\mu'></InlineMath> ; định luật Ampère có vai trò như định luật Coulomd; yếu tố dòng điện <InlineMath math='I\overrightarrow{d\ell}'></InlineMath> 
        có vai trò như điện tích điểm q, … Nắm được tính chất này, ta sẽ tìm hiểu từ trường một cách hiệu quả hơn.</p>
        
        
        
        <p>Nguồn: <a href='https://vatlydaicuong.com/tuong-tac-tu-dinh-luat-ampere' target='_blank' rel="noreferrer">vatlydaicuong</a></p>
        </LayoutArticle>
    )
}