import React from 'react';
import Button from '../components/Button';
import CommentItem from './CommentItem';

function Comment({}) {
    return (
        <div className="w-full">
            <header className="mb-2 h-10 flex items-center justify-between">
                <p className="dark:text-white text-lg font-medium">Bình luận</p>
                <Button size="sm" type="secondary">
                    <i class="fa-light fa-arrow-down-square-triangle"></i>
                </Button>
            </header>
            <main className={`w-full overflow-y-auto`}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <Button type="secondary">Thêm</Button>
            </main>
        </div>
    );
}

export default Comment;
