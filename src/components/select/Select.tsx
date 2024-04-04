import {useState} from "react";
import styled from "styled-components";

type ArrayType = {
    id: any
    name: string
}

type SelectProps = {
    value: any
    onChangeSelect: (value: any) => void
    items: Array<ArrayType>
};

type StyledDivProps = {
    isFocused: boolean
};


export const Select = (props: SelectProps) => {

    const StyledDiv = styled.div<StyledDivProps>`
        border: 2px solid ${props => (props.isFocused ? ' blue' : '')};
        padding: 10px;
        margin: 10px;
        outline: none; /* Убираем стандартный outline при фокусе для красоты */
        cursor: pointer; /* Чтобы показать, что это кликабельный элемент */
    `;

    const DropdownItem = styled.div`
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            background-color: lightblue;
        }
    `;

    const [selectValue, setSelectValue] = useState<any>(props.value)
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);


    const onItemSelect = (item: ArrayType) => {
        setSelectValue(item.id);
        setIsOpen(false);
        if (props.onChangeSelect) {
            props.onChangeSelect(item.id);
        }
    };


    return (
        <div>
            <StyledDiv onClick={toggleDropdown}
                       onFocus={() => setIsFocused(true)}
                       onBlur={() => setIsFocused(false)}
                       isFocused={isFocused}
            >
                {selectValue}
            </StyledDiv>
            {
                isOpen &&
                props.items.map(i =>
                    <DropdownItem key={i.id} onClick={() => onItemSelect(i)}>
                        {i.name}
                    </DropdownItem>
                )
            }
        </div>
    );
}


