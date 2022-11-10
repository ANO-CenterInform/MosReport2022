import React, { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'
import mosLogo from '../../src/images/mip_logo.png';
import Accordion from "./Accordion";
import Picture from "./Picture";
import {NavLink} from "react-router-dom";
import NaviLink from "./NaviLink";
import pl from "../hooks/pageLinks";

type LinksProps = {
    pageId: number;
    links: number;
}

export default function Sidebar({pageId, links}: LinksProps) {
    const [isOpen, setIsOpen] = useState(false)

    const activeStyle = {
        opacity: "100",
    };


    useEffect(() => {
        function handleEscape(event: any) {
            if (!isOpen) return;

            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("keyup", handleEscape);
        return () => document.removeEventListener("keyup", handleEscape);
    }, [isOpen]);

    return (
        <aside>
            <div className="flex flex-col h-full justify-start items-center w-full md:left-0 md:top-0 md:w-28 2xl:w-44
            py-4 md:pt-10 md:h-full color-white bg-mosBlue-900">
                <button className={'z-40 lg:fixed'} onClick={() => setIsOpen(state => !state)}>
                    {!isOpen ? <div className="flex flex-col justify-center h-8 w-8 space-y-2"><div className="w-8 h-0.5 bg-white">{''}</div>
                            <div className="w-8 h-0.5 bg-white">{''}</div>
                            <div className="w-8 h-0.5 bg-white">{''}</div></div> :

                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="#fff" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12">{''}</path>
                        </svg>
                    }
                </button>
                <div className={'max-md:hidden md:fixed md:pt-24 lg:pt-36'}>
                    <ul>
                        {pl(links).map(item =>
                            <li className={'mb-8'} key={item.name}>
                                <NavLink
                                    className={'border-l p-2 border-white text-white opacity-50'}
                                    to={`/pages/${pageId}${item.path}`}
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0">
                        <div
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 opacity-75 bg-cool-gray-600"
                        />
                    </div>
                </Transition.Child>

                <div className='absolute sm:top-0 sm:left-0 md:ml-28 2xl:ml-44 p-6 bg-mosBlue-700 text-white h-full w-full lg:w-96 z-50 overflow-y-scroll scrollbar'>
                    <div className={'mb-12'}><Picture img={mosLogo} /></div>
                    <Accordion>
                        <Accordion.Trigger><div className={'mb-4'}>обращение к акционерам председателя совета директоров, генерального директора и исполнительного директора по девелопменту</div></Accordion.Trigger>
                        <Accordion.Content>
                            <ul>
                                <NaviLink path={'/pages/1/1'} text={'01. Обращение руководства АО «Мосинжпроект»'} />
                                <NaviLink path={'/pages/1/2'} text={'02. Планы на будущее'} />
                                <NaviLink path={'/pages/1/3'} text={'03. Награды и достижения'} />
                                <NaviLink path={'/pages/1/4'} text={'04. Конкурсы АО «Мосинжпроект»'} />
                                <NaviLink path={'/pages/1/5'} text={'05. Задачи, стоящие перед АО «Мосинжпроект» в следующем году'} />
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion>
                        <Accordion.Trigger><div className={'mb-4'}>общие сведения, положение акционерного общества в отрасли</div></Accordion.Trigger>
                        <Accordion.Content>
                            <ul>
                                <NaviLink path={'/pages/2/1'} text={'01. Стратегия и перспективы развития общества, стратегическое видение перспектив.'} />
                                <NaviLink path={'/pages/2/2'} text={'02. Организационная структура'} />
                                <NaviLink path={'/pages/2/3'} text={'03. Органы управления и контроля обществом'} />
                                <NaviLink path={'/pages/2/4'} text={'04. Информация о существенных фактах за отчетный период'} />
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion>
                        <Accordion.Trigger><div className={'mb-4'}>Корпоративное управление</div></Accordion.Trigger>
                        <Accordion.Content>
                            <ul>
                                <NaviLink path={'/pages/3/1'} text={'01. Стратегия и перспективы развития общества, стратегическое видение перспектив.'} />
                                <NaviLink path={'/pages/3/2'} text={'02. Организационная структура'} />
                                <NaviLink path={'/pages/3/3'} text={'03. Органы управления и контроля обществом'} />
                                <NaviLink path={'/pages/3/4'} text={'04. Ревизионная комиссия общества'} />
                                <NaviLink path={'/pages/3/5'} text={'05. Информация о существенных фактах за отчетный период'} />
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion>
                        <Accordion.Trigger><div className={'mb-4'}>Основные производственные показатели</div></Accordion.Trigger>
                        <Accordion.Content>
                            <ul>
                                <NaviLink path={'/pages/4/1'} text={'01. Основные итоги реализации программ города'} />
                                <NaviLink path={'/pages/4/2'} text={'02. Москвы по строительству метро, инфраструктурных, гражданских и дорожных объектов'} />
                                <NaviLink path={'/pages/4/3'} text={'03. Объем работ, выполненных в 2018-2021 годах'} />
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion>
                        <Accordion.Trigger><div className={'mb-4'}>Основные показатели финансово-хозяйственной деятельности</div></Accordion.Trigger>
                        <Accordion.Content>
                            <ul>
                                <NaviLink path={'/pages/5/1'} text={'01. Анализ финансовых результатов деятельности Общества'} />
                                <NaviLink path={'/pages/5/2'} text={'02. Анализ структуры активов Общества'} />
                                <NaviLink path={'/pages/5/3'} text={'03. Анализ структуры пассивов Общества'} />
                                <NaviLink path={'/pages/5/4'} text={'04. Анализ основных производственных показателей по персоналу'} />
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                    <div className={'mb-4 pl-6 uppercase'}><NaviLink path={'/pages/6/1'} text={'Распределение прибыли Общества'} /></div>
                    <div className={'mb-4 pl-6 uppercase'}><NaviLink path={'/pages/7/1'} text={'Инвестиционная деятельность'} /></div>
                    <Accordion>
                        <Accordion.Trigger><div className={'mb-4'}>Кадровая и социальная политика</div></Accordion.Trigger>
                        <Accordion.Content>
                            <ul>
                                <NaviLink path={'/pages/8/1'} text={'01. Структура кадрового состава'} />
                                <NaviLink path={'/pages/8/2'} text={'02. Ротация кадров'} />
                                <NaviLink path={'/pages/8/3'} text={'03. Подготовка кадров'} />
                                <NaviLink path={'/pages/8/4'} text={'04. Организация работы и предпринятые меры по обеспечению охраны здоровья персонала и функционирования Общества при пандемии'} />
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion>
                        <Accordion.Trigger><div className={'mb-4'}>Управление устойчивым развитием</div></Accordion.Trigger>
                        <Accordion.Content>
                            <ul>
                                <NaviLink path={'/pages/9/1'} text={'01. Подход к деятельности в области устойчивого развития'} />
                                <NaviLink path={'/pages/9/2'} text={'02. Строительство качественной и безопасной инфраструктуры для жизни (в рамках градостроительного комплекса Москвы)'} />
                                <NaviLink path={'/pages/9/3'} text={'03. Охрана окружающей среды (E)'} />
                                <NaviLink path={'/pages/9/4'} text={'04. Социальная деятельность (S)'} />
                                <NaviLink path={'/pages/9/5'} text={'05. Управленческий аспект. Взаимодействие с заинтересованными сторонами (G)'} />
                                <NaviLink path={'/pages/9/6'} text={'06. Ответственный подход в цепочке поставок'} />
                                <NaviLink path={'/pages/9/7'} text={'07. Цифровизация, информационная безопасность'} />
                            </ul>
                        </Accordion.Content>
                    </Accordion>
                    <div className={'mb-4 pl-6 uppercase'}><NaviLink path={'/pages/10/1'} text={'Справочная информация для акционеров'} /></div>
                </div>
            </Transition>
        </aside>
    );
}
