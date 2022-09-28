import Menu from "components/Menu";
import { NavColumn } from "components/NavColumn/style";
import { navigationItems } from "data/navigation";
import React from "react";
import { RoutePath } from "types/routes";
import * as S from "./style";

const Settings = () => {
  return (
    <S.Settings>
      <Menu
        active={RoutePath.SETTINGS_PRODUCTS}
        navItems={navigationItems}
        onNavigate={function (data: RoutePath): void {
          throw new Error("Function not implemented.");
        }}
        onLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <S.SettingsPage>
        <body>
          <S.SettingsPageHeaderTitle>
            Cadastrar Convites
          </S.SettingsPageHeaderTitle>
        </body>
        <S.SettingsContent>
          <S.SettingsContentSidebar>
         <NavColumn />
          </S.SettingsContentSidebar>
          <S.SettingsContentBox>
            <S.SettingsContentBoxEmpty>
                Selecione Convites
            </S.SettingsContentBoxEmpty>
          </S.SettingsContentBox>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
};

export default Settings;
