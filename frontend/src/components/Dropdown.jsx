import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Wrapper = styled.div`
  position: relative;
  border: 1px gray solid;
  border-radius: 5px;
  width: 10em;
  text-align: center;
`;
const Option = styled.a`
  display: block;
  border-radius: 5px;
  &:hover {
    background-color: #348b34;
  }
`;
const SelectedOption = styled(Option)``;
const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;
const List = styled.li`
  list-style-type: none;
`;
const Dropdown = ({ mapData }) => {
  const { mapId } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedMap = mapData.find((map) => map.id == mapId);
  const otherMaps = mapData.filter((map) => map.id != mapId); //Remove selected map from the list.
  function toggleDropdown(e) {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  }
  return (
    <Wrapper>
      <Option onClick={toggleDropdown}>{selectedMap.name}</Option>
      {showDropdown &&
        otherMaps.map((map) => <Option key={map.id}>{map.name}</Option>)}
    </Wrapper>
  );
};
export default Dropdown;
