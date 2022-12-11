import styled from "styled-components";

const Icon = styled((props) => <div {...props} />)`
  ${({ onClick, theme }) =>
    Boolean(onClick) ? "cursor: pointer;" : `color: ${theme.palette.lightGrey}`}
`;

interface CustomIconProps {
  iconType: string;
  onClick?: () => void;
}

const CustomIcon = ({ iconType, onClick }: CustomIconProps) => {
  const handleClick = () => onClick?.();

  return (
    <Icon className="material-icons-outlined" onClick={onClick && handleClick}>
      {iconType}
    </Icon>
  );
};

export default CustomIcon;
