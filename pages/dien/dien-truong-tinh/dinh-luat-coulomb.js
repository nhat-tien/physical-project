import Layout from "../../../components/Layout"
import Image from "next/image"

export default function Post() {
    return (
        <Layout >
        <main className='article'>
            <h2 className="heading">Định luật coulomb</h2>
            <h3 className="heading2">I. Sự nhiễm điện của các vật. Điện tích. Tương tác điện.</h3>
            <p className='heading3'>1. Sự nhiễm điện của các vật.</p>
            <p className="heading3">- Nhiễm điện do cọ xát:</p>
            <Image src='/dien/pic1-1.png' width={600} height={600} alt='nhiem-dien-co-sat'></Image>
            <p>Cọ xát một thước nhựa vào vải len, ta thấy thước nhựa có thể hút được các vật nhẹ như giấy</p>
            <p className='heading3'>- Nhiễm điện do tiếp xúc</p>
            <Image src='/dien/pic1.2.png' width={200} height={200} alt='nhiem-dien-co-sat'></Image>
            <p>Cho thanh kim loại không nhiễm điện chạm vào quả cầu đã nhiễm điện thì thanh kim loại nhiễm điện cùng dấu với điện tích của quả cầu</p>
            <p>Đưa thanh kim loại ra xa quả cầu thì thanh kim loại vẫn nhiễm điện.</p>
            <p className="heading3">- Nhiễm điện do hưởng ứng</p>
            <Image src='/dien/pic1.3.png' width={200} height={200} alt='nhiem dien hưởng ứng'></Image>            
            <p className="heading3">2. Điện tích. Điện tích điểm</p>
            <p>- Vật bị nhiễm điện còn gọi là vật mang điện, vật tích điện hay vật chứa điện tích.</p>
            <p>- Điện tích điểm là một vật tích điện có kích thước rất nhỏ so với khoảng cách tới điểm mà ta xét. Điện tích điểm là điện tích được coi như tập trung tại một điểm.</p>
            <p className="heading3">3. Tương tác điện. Hai loại điện tích</p>
            <p>- Các điện tích hoặc đẩy nhau, hoặc hút nhau. Sự đẩy nhau hay hút nhau giữa các điện tích đó là tương tác điện.</p>
            <Image src='/dien/pic1.4.png' width={200} height={200} alt='tuong tac dien'></Image>
            <p>- Có hai loại điện tích là điện tích dương (+) và điện tích âm (-).</p>
            <p>+ Các điện tích cùng loại (cùng dấu) thì đẩy nhau.</p>
            <p>+ Các điện tích khác loại (khác dấu) thì hút nhau.</p>
            <p>- Hai lực tác dụng vào hai điện tích là hai lực trực đối, cùng phương, ngược chiều, độ lớn bằng nhau và đặt vào hai điện tích.</p>
            <p className="heading2">II. Định luật Cu-lông. Hằng số điện môi.</p>
            <p className="heading3">1. Định luật Cu-lông.</p>
            <p>Năm 1785, Cu-lông, nhà bác học người Pháp, lần đầu tiên lập được định luật về sự phụ thuộc của lực tương tác giữa các điện tích điểm (gọi tắt là lực điện hay lực Cu-lông) vào khoảng cách giữa chúng.</p>
            <p>- Nội dung: Lực hút hay đẩy giữa hai điện tích điểm có phương trùng với đường thẳng nối hai điện tích điểm đó, có độ lớn tỉ lệ thuận với độ lớn của hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng.</p>
            <p>Biểu thức:</p>
            
        </main>
        </Layout>
    )
}