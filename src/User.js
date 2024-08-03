import { useState } from "react";
import img10 from './image/image11.jpg';
import axios from 'axios'; // تأكد من استيراد axios إذا لم يكن مستورداً
import Swal from "sweetalert2";

export default function User() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addresss, setAddress] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [phoneError, setPhoneError] = useState('');
    const unitPrice = 249;
    const totalPrice = unitPrice * quantity;
    const shipping = 50;
    // دالة لتحويل الأرقام الهندية والعربية إلى أرقام غربية
    const normalizeDigits = (number) => {
        const arabicToEnglishDigits = {
            '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4',
            '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
        };
        const hindiToEnglishDigits = {
            '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
            '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
        };

        return number.split('').map(char => arabicToEnglishDigits[char] || hindiToEnglishDigits[char] || char).join('');
    };

    const formatPhoneNumber = (number) => {
        // تحويل الأرقام الهندية والعربية إلى أرقام غربية
        let cleanedNumber = normalizeDigits(number);
        // إزالة الرموز الزائدة من بداية الرقم
        cleanedNumber = cleanedNumber.replace(/^(002|\+2|2\+)/, '');
        // إزالة أي أحرف غير الأرقام
        cleanedNumber = cleanedNumber.replace(/\D/g, '');
        return cleanedNumber;
    }

    const validatePhoneNumber = (number) => {
        const formattedPhoneNumber = formatPhoneNumber(number);
        if (formattedPhoneNumber.length !== 11) { // هنا تم تعديل 11 إلى 13 ليطابق الطلب الأصلي
            return 'رقم الهاتف يجب أن يتكون من 11 رقمًا!';
        }
        return '';
    }

    const submit = (e) => {
        e.preventDefault();

        // التحقق من رقم الهاتف قبل إرسال النموذج
        const error = validatePhoneNumber(phoneNumber);
        if (error) {
            setPhoneError(error);
            return;
        }
        setPhoneError('');

        const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
        axios.post('https://admin.vivien-cosmetics.com/api/v1/orders',{
            fullname: name,
            phone: formattedPhoneNumber,
            address: addresss,
            qty: quantity,
            shipping_cost: shipping,
            product_price: unitPrice
        }
        )
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'تم الإرسال بنجاح',
                    text: 'تم إرسال بياناتك بنجاح. شكراً لك!',
                    confirmButtonText: 'موافق'
                });
                setName('');
                setPhoneNumber('');
                setAddress('');
                setQuantity(1);
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'حدث خطأ',
                    text: 'لم يتم إرسال البيانات. حاول مرة أخرى لاحقاً.',
                    confirmButtonText: 'موافق'
                });
            });
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        if (phoneError) {
            setPhoneError('');
        }
    }

    return (
        <>
            <div style={{ padding: "45px" }} className="space hero" id="hero"></div>
            <div className="user">
                <div className="container">
                    <div style={{ alignItems: 'center' }} className="row">
                        <div className="col-12 col-md-12 col-lg-6 hero" id="hero">
                            <form onSubmit={submit}>
                                <label>اسمك بالكامل</label>
                                <input type='text' onChange={(e) => setName(e.target.value)} value={name} required minLength='2'/>
                                <label>رقم الهاتف</label>
                                <input
                                    required
                                    type='text'
                                    onChange={handlePhoneNumberChange}
                                    value={phoneNumber}
                                />
                                {phoneError && <p style={{ color: 'red',fontSize:'14px' }}>{phoneError}</p>}
                                <label>العنوان بالتفصيل</label>
                                <textarea
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={addresss}
                                    rows={3} // adjust the number of visible rows as needed
                                    cols={50} // adjust the number of visible columns as needed
                                    required
                                />
                                <label>الكمية</label>
                                <input type='number' min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                                <div className="salary">
                                    <p style={{ fontWeight: '600' }}> سعر المنتج</p>
                                    <p style={{ fontWeight: "600" }}>{unitPrice} ج.م</p>
                                </div>
                                <div className="salary">
                                    <p style={{ fontWeight: '600' }}>تكلفة الشحن</p>
                                    <p style={{ fontWeight: "600" }}>{shipping} ج.م</p>
                                </div>
                                <div className="salary">
                                    <p style={{ marginTop: "-8px", fontWeight: "600" }}> الاجمالي</p>
                                    <p style={{ fontWeight: "bold" }}>{totalPrice + 50} ج.م</p>
                                </div>
                                <button type='submit' id="line" className="button btn btn-dark">اضغط هنا للشراء</button>
                            </form>
                        </div>
                        <div className="col-6 SconedRow">
                            <div className="photo">
                                <img style={{ width: '100%' }} src={img10} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}