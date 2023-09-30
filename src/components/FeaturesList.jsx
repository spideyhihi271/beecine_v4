import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function FeaturesList() {
    return (
        <section>
            <header className="mb-5">
                <h1 className="mt-5  dark:text-white text-3xl font-medium">
                    Tính năng cốt lõi
                </h1>
                <p className="my-2 text-sm text-gray-500">
                    Tính năng và chính sách riêng biệt cho từng gói
                </p>
            </header>
            <main className="grid grid-cols-5 dark:text-white">
                <div className="col-span-1">
                    <ul>
                        <li className="h-12">
                            <p className="font-medium">Tính năng</p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="text-sm text-gray-300">
                                Chatbot AI tùy chỉnh
                            </p>
                            <Tippy
                                placement="bottom-end"
                                content="Chú thích cho tính năng này"
                            >
                                <p className="mx-2 w-5 h-5 flex items-center justify-center text-xs rounded-full border-2 border-borderColor text-gray-600">
                                    <i class="fa-light fa-question"></i>
                                </p>
                            </Tippy>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="text-sm text-gray-300">
                                Hỗ trợ trực tuyến
                            </p>
                            <Tippy
                                placement="bottom-end"
                                content="Chú thích cho tính năng này"
                            >
                                <p className="mx-2 w-5 h-5 flex items-center justify-center text-xs rounded-full border-2 border-borderColor text-gray-600">
                                    <i class="fa-light fa-question"></i>
                                </p>
                            </Tippy>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="text-sm text-gray-300">Tích hợp</p>
                            <Tippy
                                placement="bottom-end"
                                content="Chú thích cho tính năng này"
                            >
                                <p className="mx-2 w-5 h-5 flex items-center justify-center text-xs rounded-full border-2 border-borderColor text-gray-600">
                                    <i class="fa-light fa-question"></i>
                                </p>
                            </Tippy>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="text-sm text-gray-300">
                                Phân tích nâng cao
                            </p>
                            <Tippy
                                placement="bottom-end"
                                content="Chú thích cho tính năng này"
                            >
                                <p className="mx-2 w-5 h-5 flex items-center justify-center text-xs rounded-full border-2 border-borderColor text-gray-600">
                                    <i class="fa-light fa-question"></i>
                                </p>
                            </Tippy>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <ul>
                        <li className="h-12">
                            <p className="font-medium">Miễn phí</p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                            <p className="flex-1 mx-2 text-sm">
                                Caution for this
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <ul>
                        <li className="h-12">
                            <p className="font-medium">Miễn phí</p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                            <p className="flex-1 mx-2 text-sm">
                                Caution for this
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <ul>
                        <li className="h-12">
                            <p className="font-medium">Miễn phí</p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                            <p className="flex-1 mx-2 text-sm">
                                Caution for this
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <ul>
                        <li className="h-12">
                            <p className="font-medium">Miễn phí</p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                        </li>
                        <li className="h-12 flex items-center">
                            <p className="w-5 h-5 flex items-center justify-center  text-white bg-mainColor rounded-full">
                                <i class="fa-light fa-check"></i>
                            </p>
                            <p className="flex-1 mx-2 text-sm">
                                Caution for this
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </section>
    );
}

export default FeaturesList;
