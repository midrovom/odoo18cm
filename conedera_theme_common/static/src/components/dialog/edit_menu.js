import { EditMenuDialog } from "@website/components/dialog/edit_menu";

export class EditMenuDialogCustom extends EditMenuDialog {
    setup() {
        super.setup();
    }

    addMenu(isMegaMenu) {
        console.log("ENTRAAAA AQUI");
        this.dialogs.add(MenuDialog, {
            isMegaMenu,
            save: (name, url, isNewWindow) => {
                const newMenu = {
                    fields: {
                        id: `menu_${(new Date).toISOString()}`,
                        name,
                        url: isMegaMenu ? '#' : url,
                        new_window: isNewWindow,
                        'is_mega_menu': isMegaMenu,
                        sequence: 0,
                        'parent_id': false,
                    },
                    'children': [],
                };
                this.state.rootMenu.children.push(newMenu);
                // this.state.rootMenu.children.at(-1) to forces a rerender
                this.map.set(newMenu.fields["id"], this.state.rootMenu.children.at(-1));
            },
        });
    }
}