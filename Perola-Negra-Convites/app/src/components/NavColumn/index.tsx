import { ReactComponent as Market } from "assets/icons/market.svg";
import { ReactComponent as Info } from "assets/icons/info.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import NavColumnItem from "components/NavColumnItem";
import { HTMLAttributes } from "react";

type NavColumnType = HTMLAttributes<HTMLDivElement>;

type NavColumnProps = {
  activeRoute: RoutePath;
} & NavColumnType;

const NavColumn = ({ activeRoute }: NavColumnProps) => {
  const items = [
   
    {
      icon: <Info />,
      title: "Gerenciar Produtos",
      subtitle: "Edite os pratos, preços e etc.",
      navigation: RoutePath.SETTINGS_PRODUCTS,
    },
    
  ];
  return (
    <S.NavColumn>
      {items.map((i, key) => (
        <NavColumnItem
          active={i.navigation === activeRoute}
          icon={i.icon}
          title={i.title}
          key={key}
          subtitle={i.subtitle}
        />
      ))}
    </S.NavColumn>
  );
};

export default NavColumn;
