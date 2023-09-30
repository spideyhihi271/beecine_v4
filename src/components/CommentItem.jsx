import React, { useState } from 'react';
import Submenu from '../components/SubMenu';
import Button from '../components/Button';

function CommentItem() {
    // Default
    let actions = [
        {
            icon: <i className="fa-light fa-user"></i>,
            title: 'Tài khoản của bạn',
            handel: '',
        },
    ];
    // State
    const [activeAction, setActiveAction] = useState(false);
    return (
        <>
            <div className="mb-2 flex h-fit">
                <img
                    className="w-9 h-9 object-cover rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHceXUsadKTg4v_L_HdLVPNumt1o8y5lxYi8oML-goDuMnSSo6eqvDoaJOxD-FGKG1QJU&usqp=CAU"
                    alt=""
                />
                <div className="ml-2 flex-1 dark:text-white">
                    <header className="flex justify-between">
                        <div className="flex-1">
                            <p className="text-[13px] line-clamp-1">
                                Vincent Taylor
                            </p>
                            <div className="flex text-xs text-gray-500">
                                <p>2 ngày trước</p>
                                <p className="mx-3 text-[5px]">
                                    <i class="fa-duotone fa-circle"></i>
                                </p>
                                <p>8 thích</p>
                            </div>
                        </div>
                        <div className="w-fit flex items-center">
                            <Button size="sm" iconOnly type="four">
                                <i class="fa-light fa-heart"></i>
                            </Button>
                            <Button size="sm" iconOnly type="four">
                                <i class="fa-light fa-reply"></i>
                            </Button>
                        </div>
                    </header>
                    <p className="my-2 text-xs text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et earum animi alias quaerat non! Corporis, eius!
                        Provident voluptates delectus, reprehenderit vitae dicta
                        ea. Iure unde quis accusamus corporis ad quia.
                    </p>
                </div>
            </div>
        </>
    );
}

export default CommentItem;
