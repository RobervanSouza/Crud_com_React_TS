import * as S from "./style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";

const Home = () => {
  const dateDescrition = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>
                Perola Negra Convites
              </S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescrition}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Pesquise seu Convite" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b> Convites </b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p> Lista de Convites </p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
