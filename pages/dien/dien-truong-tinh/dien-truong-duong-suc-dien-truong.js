import Layout from "../../../components/Layout"
import Image from "next/image"
import QuizBox from "../../../components/QuizBox";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import Path from "../../../components/Path";

export default function Post() {
        const quiz = {
            title: 'Đơn vị đo của cường độ điện trường là: ',
            A: 'N/m',
            B: 'V/m',
            C: 'Ω',
            D: 'T',
            answer: 'B'
        }
return (
        <Layout >
            <main className='article'>
                <Path />
                <p className="heading">Điện trường - đường sức điện</p>
                <p className="heading2">I. Điện trường</p>
<p className="heading3">1. Môi trường truyền tương tác điện&nbsp;</p>
<p>Giả sử ta đặt hai quả cầu điện tích trái dấu trong một bình kín rồi hút hết không khí ra. Ta đã biết, lực hút của hai quả cầu không những không yếu đi mà lại mạnh lên. Như vậy phải có một môi trường nào đó truyền tương tác điện giữa hai quả cầu. Môi trường đó là điện trường.</p>
<p className="heading3">2. Điện trường</p>
<p>Điện trường là môi trường (dạng vật chất) bao quanh điện tích và gắn liền với điện tích. Điện trường tác dụng lực điện lên các điện tích khác đặt trong nó.</p>
<p>Nơi nào có điện tích thì xung quanh điện tích đó có điện trường.</p>
<p>Một điện tích Q nằm tại một điểm trong không gian sẽ gây ra xung quanh nó một điện trường. Một điện tích q nằm trong điện trường đó sẽ bị Q tác dụng một lực điện và ngược lại, q cũng tác dụng lên Q một lực đối (hình 3.1)</p>
<p className="heading2">II.&nbsp;Cường độ điện trường</p>
<p className="heading3">1. Khái niệm cường độ điện trường</p>
<p>Giả sử có một điện tích điểm Q nằm tại điểm O. Điện tích này tạo ra một điện trường xung quanh nó. Để nghiên cứu điện trường của Q tại điểm M, ta đặt tại đó một điện tích điểm q, gọi là điện tích thử và xét lực điện tác dụng lên q (Hình 3.2). Theo định luật Cu-lông, q càng nằm xa Q thì lực điện càng nhỏ. Ta nói điện trường tại các điểm càng xa Q càng yếu. Vì thế cần phải xây dựng một khái niệm đặc trưng cho sự mạnh, yếu của điện trường tại một điểm. Khái niệm đó là cường độ điện trường.</p>
<Image src='/dien-truong/pic2.1.png' width={400} height={400} alt='hinh minh hoa'></Image>
<p className="heading3">2. Định nghĩa.</p>
<p>Thực nghiệm chứng tỏ rằng lần lượt các điện tích thử q1, q2,… khác nhau tại một điểm thì:</p>
<BlockMath math='\dfrac{F_{1}}{q_{1}}=\dfrac{F_{2}}{q_{2}}=...'></BlockMath>
<p>Ta có thể thấy độ lớn của lực điện tác dụng lên điện tích thử q = +1C để đặc trưng cho cường độ điện trường tại điểm mà ta xét. Tuy nhiên theo công thức, độ lớn F của lực điện tỉ lệ thuận với q, nên thương số <InlineMath math='\dfrac{F}{q}'></InlineMath>
chính là độ lớn của lực điện tác dụng lên điện tích 1C. Do đó, ta sẽ lấy thương số này làm số đo của cường độ điện trường. Vậy&nbsp; ta có định nghĩa sau:
</p>
<p>Cường độ điện trường tại một điểm là đại lượng đặc trưng cho tác dụng lực của điện trường tại điểm đó. Nó được xác định bằng thương số của độ lớn lực điện F tác dụng lên một điện tích thử q (dương) đặt tại điểm đó và độ lớn của q.</p>
<p className="text-center"><InlineMath math='E=\dfrac{F}{q}'></InlineMath>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3.1)</p> 
<p className="heading3">3. Vectơ cường độ điện trường</p>
<p>Vì lực F là đại lượng vectơ, còn điện tích q là đại lượng vô hướng, nên cường độ điện trường E&nbsp;cũng là một đại lượng vectơ.</p>
<p>Cường độ điện trường được biểu diễn bằng một vectơ gọi là vectơ cường độ điện trường. Từ công thức (3.1), ta có:</p>
<p>Vectơ cường độ điện trường <InlineMath math='\overrightarrow{E}'></InlineMath> có:</p>
<p>+ Phương và chiều trùng với phương và chiều của lực điện tác dụng lên điện tích thử q dương.</p>
<p>+ Chiều dài (môđun) biểu diễn độ&nbsp; lớn của cường độ điện trường theo một tỉ lệ xích nào đó.</p>
<p className="heading3">4. Đơn vị đo cường độ điện trường.</p>
<p>Đơn vị đo cường độ điện trường là Vôn trên mét (kí hiệu là V/m).</p>
<p className="heading3">5. Công thức tính cường độ điện trường tại một điện tích điểm</p>
<p>Công thức tính cường độ điện trường tại một điện tích điểm Q:</p>
<p className="text-center"><InlineMath math='E= \dfrac{F}{q}=k.\dfrac{|Q|}{\varepsilon .r^{2}}'></InlineMath>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3.2)</p>
<p className="heading3">6. Nguyên lí chồng chất điện trường</p>
<p>Giả sử có hai điện tích điểm Q1 và Q2 gây ra tại điểm M hai vec tơ cường độ điện trường <InlineMath math='\overrightarrow{E_{1}}'></InlineMath> và <InlineMath math='\overrightarrow{E_{2}}'></InlineMath></p>
<p>Nguyên lí chồng chất điện trường: Các điện trường E1 và E2 đồng thời tác dụng lực điện lên điện tích q một cách độc lập với nhau. Cường độ điện trường tại một điểm bằng tổng hợp của <InlineMath math='\overrightarrow{E_{1}}'></InlineMath> và <InlineMath math='\overrightarrow{E_{2}}'></InlineMath></p>
<p className="text-center"><InlineMath math='\overrightarrow{E}=\overrightarrow{E_{1}}+\overrightarrow{E_{2}}'></InlineMath>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3.3)</p>
<p>Các vectơ cường độ điện trường tại một điểm được tổng hợp theo quy tắc hình bình hành.</p>

<p className="heading2">III. Đường sức điện</p>
<p className="heading3">1. Hình ảnh các đường sức điện</p>
<p>Người ta chứng minh được rằng, các hạt nhỏ đã bị nhiễm điện và nằm dọc theo phương của lực điện. Tập hợp các hạt nhỏ sẽ nằm dọc theo những đường mà tiếp tuyến tại mỗi điểm nằm theo phương của vectơ cường độ điện trường tại đó. Mỗi đường đó gọi là một đường sức điện.</p>
<p className="heading3">2. Định nghĩa</p>
<p>Đường sức điện là đường mà tiếp tuyến tại mỗi điểm của nó là giá của vectơ cường độ điện trường tại điểm đó. Nói cách khác, đường sức điện là đường mà lực điện tác dụng dọc theo nó.</p>
<p className="heading3">3. Các đặc điểm của đường sức điện</p>
<p>+ Qua mỗi điểm trong điện trường có một và chỉ một đường sức điện mà thôi.</p>
<p>+ Đường sức điện là những đường có hướng. Hướng của đường sức&nbsp; điện tại một điểm là hướng của vectơ cường độ điện trường tại điểm đó.</p>
<p>+ Đường sức điện của điện trường tĩnh điện là đường không khép kín. Nó đi ra điện tích dương và kết thúc ở điện tích âm.</p>
<p>+ Tuy các đường sức từ là dày đặc nhưng người ta chỉ vẽ một số ít đường theo quy tắc sau : Số đường sức đi qua một điện tích nhất định đặt vuông góc với đường sức điện tại điểm mà ta xét thì tỉ lệ với cường độ điện trường tại điểm đó.</p>
<p className="heading3">4. Điện trường đều</p>
<p>Điện trường đều là điện trường mà vectơ cường độ điện trường tại mọi điểm đều có cùng phương, cùng chiều, và cùng độ lớn; đường sức điện là những đường thẳng song song cách đều.</p>
<p>Điện trường trong một điện môi đồng chất nằm ở giữa hai bản kim loại phẳng đặt song song với nhau và điện tích bằng nhau, trái dấu là một điện trường đều.</p>
<Image src='/dien-truong/pic2.2.png' width={400} height={400} alt='hinh minh hoa'></Image>
<p className="heading3">Sơ đồ tư duy về điện trường và cường độ điện trường. Đường sức điện</p>
<Image src='/dien-truong/pic2.3.png' width={800} height={400} alt='hinh minh hoa'></Image>
        <p>Nguồn: <a href='https://loigiaihay.com/ly-thuyet-dien-truong-va-cuong-do-dien-truong-duong-suc-dien-c62a6698.html' target={'_blank'}>loigiaihay.com</a></p>
        <QuizBox quiz={quiz}/>
        </main>
            </Layout>
    )
}