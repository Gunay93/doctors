import styles from './IntroSection.module.css';

function IntroSection() {
    return (
        <div className={styles.intro}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <h4>Nəyə görə Lor Hospital?</h4>
                        <p>
                            Lor Hospital – 2013-cü ildən fəaliyyət göstərən Azərbaycanın eləcə də Qafqazın
                            ilk və yeganə ixtisaslaşmış Qulaq Burun Boğaz və Baş-Boyun Mərkəzidir.
                            <br /><br />
                            Azərbaycanda ilk Qulaq Burun Boğaz və Baş-Boyun Mərkəzi olmağımızın vermiş
                            olduğu məsuliyyət ilə poliklinika, laboratoriya, funksional diaqnostika
                            müayinələrindən sonra pasiyentlərimizə daha dəqiq diaqnoz qoyularaq lazımi
                            müalicələr aparılır.
                            <br /><br />
                            Qüsursuz xidmət anlayışını əsas tutaraq Avropa standartlarına uyğun müasir
                            müalicə və diaqnostika üsulları ilə xidmətlərimizin yüksək keyfiyyətini təmin edirik.
                        </p>

                    </div>
                    <div className="col-md-7">
                        <img src="/img/intro.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IntroSection;
