import * as S from "./style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { useNavigate } from "react-router-dom";
import ProductItemList from "components/ProductItemList";
import ProductItem from "components/ProductItem";
import { products } from "mocks/products";
import { orders } from "mocks/orders";
import { ProductResponse } from "types/Product";

const Home = () => {
  const dateDescrition = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
    
  });
   const navigate = useNavigate();
   const handleNavigation = (path: RoutePath) => navigate(path);
   const handleSelection = (product: ProductResponse) => {}
  return (
    <S.Home>
      <body>
        <Menu
          active={RoutePath.HOME}
          navItems={navigationItems}
          onNavigate={handleNavigation}
          onLogout={() => navigate(RoutePath.LOGIN)}
        />
        <S.HomeContent>
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

          <div>
            <S.HomeProductTitle>
              <b> Convites </b>
            </S.HomeProductTitle>
            <S.HomeProductList>
             <ProductItemList>
                 {Boolean(products.length) &&
                products.map((product, index) => (
                   <ProductItem
                    product={product}
                    key={`ProductItem-${index}`}
                    onSelect={handleSelection}
                  />
                  
                ))}
              
             </ProductItemList>
            </S.HomeProductList>
          </div>
        </S.HomeContent>
      </body>
    </S.Home>
  );
};

export default Home;
