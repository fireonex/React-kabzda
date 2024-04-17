import {KeyboardEventHandler, useEffect, useState} from "react";
import styled from "styled-components";
import styles from './Select.module.css'
import {KeyboardEvent} from "react";

type ItemType = {
    value: any
    title: string
    country?: string
    population?: number
}

type SelectProps = {
    value?: any
    onChangeSelect: (value: any) => void
    items: Array<ItemType>
};


export const Select = (props: SelectProps) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const SelectedItem = props.items.find(i => i.value === props.value)
    const HoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);

    const ToggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChangeSelect(value);
        ToggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChangeSelect(pretendentElement.value)
                        return;
                    }
                }

            }
            if (!SelectedItem) {
                props.onChangeSelect(props.items[0].value)
            }
        }


        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

        // const currentIndex = props.items.findIndex(item => item.value === hoveredElementValue);
        // let newIndex = currentIndex;
        //
        // if (e.key === 'ArrowUp') {
        //     newIndex = currentIndex <= 0 ? props.items.length - 1 : currentIndex - 1;
        // } else if (e.key === 'ArrowDown') {
        //     newIndex = currentIndex >= props.items.length - 1 ? 0 : currentIndex + 1;
        // }
        //
        // const newHoveredValue = props.items[newIndex]?.value;
        // setHoveredElementValue(newHoveredValue);
        //
        // // Если нужно, чтобы при нажатии клавиш выбирался элемент
        // if (e.key === 'Enter' && newHoveredValue !== undefined) {
        //     onItemClick(newHoveredValue);
        // }
    }


    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span onClick={ToggleItems}>{SelectedItem && SelectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i =>
                        <div onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                             className={styles.item + " " + (HoveredItem === i ? styles.selected : '')}
                             onClick={() => onItemClick(i.value)}
                             key={i.value}>
                            {i.title}
                        </div>)}
                </div>
            }
        </div>
    )
}


// type ArrayType = {
//     id: any
//     name: string
// }
//
// type SelectProps = {
//     value: any
//     onChangeSelect: (value: any) => void
//     items: Array<ArrayType>
// };
//
// type StyledDivProps = {
//     isFocused: boolean
// };
//
//
// export const Select = (props: SelectProps) => {
//
//     const StyledDiv = styled.div<StyledDivProps>`
//         border: 2px solid ${props => (props.isFocused ? ' blue' : '')};
//         padding: 10px;
//         margin: 10px;
//         outline: none; /* Убираем стандартный outline при фокусе для красоты */
//         cursor: pointer; /* Чтобы показать, что это кликабельный элемент */
//     `;
//
//     const DropdownItem = styled.div`
//         padding: 5px 10px;
//         cursor: pointer;
//
//         &:hover {
//             background-color: lightblue;
//         }
//     `;
//
//     const [selectValue, setSelectValue] = useState<any>(props.value)
//     const [isOpen, setIsOpen] = useState(false);
//     const [isFocused, setIsFocused] = useState(false);
//
//     const toggleDropdown = () => setIsOpen(!isOpen);
//
//
//     const onItemSelect = (item: ArrayType) => {
//         setSelectValue(item.id);
//         setIsOpen(false);
//         if (props.onChangeSelect) {
//             props.onChangeSelect(item.id);
//         }
//     };
//
//
//     return (
//         <div>
//             <StyledDiv onClick={toggleDropdown}
//                        onFocus={() => setIsFocused(true)}
//                        onBlur={() => setIsFocused(false)}
//                        isFocused={isFocused}
//             >
//                 {selectValue}
//             </StyledDiv>
//             {
//                 isOpen &&
//                 props.items.map(i =>
//                     <DropdownItem key={i.id} onClick={() => onItemSelect(i)}>
//                         {i.name}
//                     </DropdownItem>
//                 )
//             }
//         </div>
//     );
// }


