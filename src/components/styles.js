import styled from "styled-components";

export const SearchableDropdownWrapper = styled.div`
  position: relative;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const DropDownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
`;

export const DropDropnListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const InputTitle = styled.div`
  font-size: 1.2em;
  margin-bottom: 10px;
  text-align: left;
  font-family: fangsong;
`;
export const MovieListWrapper = styled.div`
  background-color: #d3d3d3; /* GenreList background color */
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const MovieListTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const MovieListItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MovieItems = styled.li`
  margin-bottom: 5px;
`;

export const GenreListWrapper = styled.div`
  /* background-color: #d3d3d3; /* GenreList background color */ */
  padding: 20px;
  border-radius: 8px;
`;

export const GenreTitle = styled.div`
  font-size: 1.2em;
  margin-bottom: 10px;
  font-family: fangsong;
`;

export const GenreMapList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const GenreDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const GenreItems = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ddd; /* Hover background color */
  }
`;

export const GenreOptions = styled.option`
  background-color: #d3d3d3;
`;
