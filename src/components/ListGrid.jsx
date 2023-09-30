import React, { useState } from 'react';
import MovieItem from './MovieItem';
import Selector from './Selector';
import Popup from './Popup';
import WickViewMovie from './WickViewMovie';

function ListGrid({
    data = [1, 2, 3],
    subTitle,
    title,
    perOne = false,
    type = 0,
    selectors = [],
}) {
    // Item
    let Item = MovieItem;

    // State
    const [isPopping, setPopping] = useState(false);

    return (
        <>
            <>
                <header className="mb-3 flex items-center justify-between">
                    <div className="flex-1">
                        <p className="dark:text-white text-lg font-medium">
                            {title}
                        </p>
                        <p className="text-sm text-gray-400">{subTitle}</p>
                    </div>
                    <div>
                        {selectors.length > 0 && <Selector data={selectors} />}
                    </div>
                </header>
                <div
                    className={`grid gap-2 ${
                        perOne
                            ? 'grid-cols-1'
                            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
                    }`}
                >
                    {data.map((item, idx) => (
                        <Item
                            type={type}
                            handlePopping={() => setPopping(true)}
                        />
                    ))}
                </div>
            </>
            <Popup visible={isPopping} setVisible={setPopping}>
                <WickViewMovie setVisible={setPopping} />
            </Popup>
        </>
    );
}

export default ListGrid;
