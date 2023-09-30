import React, { useState } from 'react';
import Button from './Button';
import Submenu from './SubMenu';

function Selector({ data = [] }) {
    const [dropping, setDropping] = useState(false);
    return (
        <div className="relative z-[999]">
            <Submenu
                show={dropping}
                onClickOutside={() => setDropping(false)}
                actions={data}
            >
                <div>
                    <Button
                        type="secondary"
                        widthFull
                        rounded="xl"
                        rightIcon={
                            <i class="text-sm fa-sharp fa-light fa-chevron-down"></i>
                        }
                        onClick={() => setDropping(!dropping)}
                    >
                        Sắp xếp theo
                    </Button>
                </div>
            </Submenu>
        </div>
    );
}

export default Selector;
