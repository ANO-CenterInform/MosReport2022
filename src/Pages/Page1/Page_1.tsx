import Sidebar from '../../Components/Sidebar';
import man1 from '../../../public/images/page1_man1.jpg';
import man2 from '../../../public/images/page1_man2.jpg';
import man3 from '../../../public/images/page1_man3.jpg';
import img4 from '../../../public/images/page1_img4.jpg';
import icon_metro from '../../../public/icons/icon_metro.svg';
import icon_train from '../../../public/icons/icon_train.svg';
import icon_builder from '../../../public/icons/icon_builder.svg';

export default function Page_1() {

    return (
        <div className="relative grid sm:grid-cols-[7rem_1fr]">
            <Sidebar/>
            <div className="md:max-w-bootstrap-md 2xl:max-w-bootstrap-full mx-auto pt-10">
                <h1 className="px-8 mb-8 xl:pr-52 uppercase text-3xl text-mosBlue-700">обращение к акционерам председателя совета директоров, генерального директора и исполнительного директора по девелопменту</h1>

                <div className="relative md:static lg:grid lg:grid-cols-[54px_215px_16px_215px_16px_215px_54px] 2xl:grid-cols-[100px_300px_22px_300px_22px_300px_100px]">
                    <div></div>
                    <div className="flex flex-col items-center animate-in fade-in zoom-in delay-100">
                        <div className="flex justify-center"><img src={man1} alt=""/></div>
                        <div className="flex-1 p-4 bg-mosRose-500 text-white text-center max-w-[300px]">
                            <p className="font-bold">Газизуллин Марс Мулланурович</p>
                            <p>Председатель совета директоров АО «Мосинжпроект»</p>
                        </div>
                    </div>
                    <div className="md:hidden w-full bg-mosBlue-700 absolute h-[104px] top-[286px] -z-[1]"></div>
                    <div></div>
                    <div className="flex flex-col items-center bg-mosBlue-700 md:bg-white animate-in fade-in zoom-in delay-200">
                        <div className="flex justify-center"><img src={man2} alt=""/></div>
                        <div className="flex-1 p-4 bg-mosRose-500 text-white text-center max-w-[300px]">
                            <p className="font-bold">Кравцов Юрий Николаевич</p>
                            <p>Генеральный директор АО «Мосинжпроект»</p>
                        </div>
                    </div>
                    <div></div>
                    <div className="flex flex-col items-center bg-mosBlue-700 md:bg-white  animate-in fade-in zoom-in delay-250">
                        <div className="flex justify-center"><img src={man3} alt=""/></div>
                        <div className="flex-1 p-4 bg-mosRose-500 text-white text-center max-w-[300px]">
                            <p className="font-bold">Суниев Альберт Альфатович</p>
                            <p>Исполнительный директор по девелопменту АО «Мосинжпроект»</p>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className="-mt-[152px] md:pt-[144px] 2xl:-mt-[104px] lg:pt-[154px] px-6 bg-mosBlue-700 text-white">
                    <p className="mb-8 pt-6">«Мосинжпроект» в 2021 году значительно приблизил реализацию ключевого про- екта современного отечественного метростроения – создание Большой кольцевой линии московского метро. Весной были запущены две станции – «Народное Опол- чение» и «Мнёвники». В декабре открыт участок Большой кольцевой линии метро с десятью станциями. По состоянию на конец 2021 года на Большом кольце рабо- тают 22 станции.</p>
                    <p className="pb-8">Всего на БКЛ протяженностью 70 км будет функционировать 31 станция, то есть сейчас пассажиров принимают уже две трети из них. Завершение тоннелепроходки на Большом кольце – это огромный труд более чем 4 000 строителей в густонаселенных районах Москвы с большим количеством инженерных коммуникаций, в сложных гидрогеологических условиях.</p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-[50px] justify-center md:justify-between py-8 px-12 bg-neutral-100">
                    <div className="flex flex-col items-center justify-start">
                        <div className="mb-6"><img src={icon_metro} alt="" /></div>
                        <div>
                            <p className="text-4xl font-bold text-mosBlue-700">70 км</p>
                            <p className="text-sm">протяженность БКЛ</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <div className="mb-6"><img src={icon_train} alt="" /></div>
                        <p className="text-4xl font-bold text-mosBlue-700">31 станция</p>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                        <div className="mb-6"><img src={icon_builder} alt="" /></div>
                        <div>
                            <p className="text-4xl font-bold text-mosBlue-700">4000 строителей</p>
                            <p className="text-sm">участвуют в строительстве БКЛ</p>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-12 bg-neutral-100 mb-6">
                    <p className="mb-6">При строительстве тоннелей на БКЛ были задействованы 33 тоннелепроходческих механизированных комплекса, которые проходили под водоемами, действующими объектами метрополитена и железной дороги, крупными автомагистралями. Мы использовали современные программы, позволяющие отслеживать влияние подземных работ на городскую среду.</p>
                    <p>Специалисты холдинга получили неоценимый опыт подземного строительства и тоннелепроходческих работ, который будет предложен для реализации различных проектов и в России, и за ее пределами.            </p>
                </div>
                <div className="md:flex justify-between gap-6">
                    <div className="flex flex-1 justify-center items-center p-4 bg-mosBlue-700">
                        <p className="text-white text-lg md:text-xl 2xl:text-3xl uppercase text-center">помимо реализации программы развития метрополитена, «мосинжпроект» занимается:</p>
                    </div>
                    <div className="flex-2 w-full bg-fit bg-[url('../../../public/images/page1_img4.jpg')]"></div>
                </div>
                <div className="py-8 px-12 mb-6">
                    <p>Строительством новой городской магистрали – Московского скоростного диаметра, который будет сформирован Юго-Восточной и Северо-Восточной хордами, а также строительством Южной рокады.</p>
                </div>
            </div>
        </div>
        )
}
