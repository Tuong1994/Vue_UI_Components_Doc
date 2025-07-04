import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import useCatalogStore from './CatalogStore'
import useTableCatalogs from '@/features/Table/hooks/useTableCatalogs'
import useTabsCatalogs from '@/features/Tabs/hooks/useTabsCatalogs'
import useButtonCatalogs from '@/features/Button/hooks/useButtonCatalogs'
import useGridCatalogs from '@/features/Grid/hooks/useGridCatalogs'
import usePaginationCatalogs from '@/features/Pagination/hooks/usePaginationCatalogs'
import useIconCatalogs from '@/features/Icon/hooks/useIconCatalogs'
import useFormCatalogs from '@/features/Form/hooks/useFormCatalogs'
import useTypographyCatalogs from '@/features/Typography/hooks/useTypographyCatalogs'
import useDividerCatalogs from '@/features/Divider/hooks/useDividerCatalogs'
import useFlexCatalogs from '@/features/Flex/hooks/useFlexCatalogs'
import useSpaceCatalogs from '@/features/Space/hooks/useSpaceCatalogs'
import useBreadcrumbCatalogs from '@/features/Breadcrumb/hooks/useBreadcrumbCatalogs'
import useDropdownCatalogs from '@/features/Dropdown/hooks/useDropdownCatalogs'
import useAvatarCatalogs from '@/features/Avatar/hooks/useAvatarCatalogs'
import useBadgeCatalogs from '@/features/Badge/hooks/useBadgeCatalogs'
import useCardCatalogs from '@/features/Card/hooks/useCardCatalogs'
import useCarouselCatalogs from '@/features/Carousel/hooks/useCarouselCatalogs'
import useImageCatalogs from '@/features/Image/hooks/useImageCatalogs'
import useListCatalogs from '@/features/List/hooks/useListCatalogs'
import useTooltipCatalogs from '@/features/Tooltip/hooks/useTooltipCatalogs'
import useAccordionCatalogs from '@/features/Accordion/hooks/useAccordionCatalogs'
import useAlertCatalogs from '@/features/Alert/hooks/useAlertCatalogs'
import useToastCatalogs from '@/features/ToastMessage/hooks/useToastCatalogs'
import useDrawerCatalogs from '@/features/Drawer/hooks/useDrawerCatalogs'
import useModalCatalogs from '@/features/Modal/hooks/useModalCatalogs'
import useLoadingCatalogs from '@/features/Loading/hooks/useLoadingCatalogs'

const useCatalog = () => {
  const catalogStore = useCatalogStore()

  const { currentRoute } = useRouter()

  const buttonCatalogs = useButtonCatalogs()

  const iconCatalogs = useIconCatalogs()

  const typographyCatalogs = useTypographyCatalogs()

  const dividerCatalogs = useDividerCatalogs()

  const flexCatalogs = useFlexCatalogs()

  const gridCatalogs = useGridCatalogs()

  const spaceCatalogs = useSpaceCatalogs()

  const breadcrumbCatalogs = useBreadcrumbCatalogs()

  const dropdownCatalogs = useDropdownCatalogs()

  const paginationCatalogs = usePaginationCatalogs()

  const avatarCatalogs = useAvatarCatalogs()

  const badgeCatalogs = useBadgeCatalogs()

  const cardCatalogs = useCardCatalogs()

  const carouselCatalogs = useCarouselCatalogs()

  const imageCatalogs = useImageCatalogs()

  const listCatalogs = useListCatalogs()

  const tableCatalogs = useTableCatalogs()

  const tooltipCatalogs = useTooltipCatalogs()

  const tabsCatalogs = useTabsCatalogs()

  const accordionCatalogs = useAccordionCatalogs()

  const alertCatalogs = useAlertCatalogs()

  const toastCatalogs = useToastCatalogs()

  const drawerCatalogs = useDrawerCatalogs()

  const modalCatalogs = useModalCatalogs()

  const loadingCatalogs = useLoadingCatalogs()

  const formCatalogs = useFormCatalogs()

  watchEffect(() => {
    const routeName = currentRoute.value.name
    if (routeName === routeNames.BUTTON) return catalogStore.setCatalogs(buttonCatalogs.value)
    if (routeName === routeNames.ICON) return catalogStore.setCatalogs(iconCatalogs.value)
    if (routeName === routeNames.TYPOGRAPHY) return catalogStore.setCatalogs(typographyCatalogs.value)
    if (routeName === routeNames.DIVIDER) return catalogStore.setCatalogs(dividerCatalogs.value)
    if (routeName === routeNames.FLEX) return catalogStore.setCatalogs(flexCatalogs.value)
    if (routeName === routeNames.GRID) return catalogStore.setCatalogs(gridCatalogs.value)
    if (routeName === routeNames.SPACE) return catalogStore.setCatalogs(spaceCatalogs.value)
    if (routeName === routeNames.BREADCRUMB) return catalogStore.setCatalogs(breadcrumbCatalogs.value)
    if (routeName === routeNames.DROPDOWN) return catalogStore.setCatalogs(dropdownCatalogs.value)
    if (routeName === routeNames.PAGINATION) return catalogStore.setCatalogs(paginationCatalogs.value)
    if (routeName === routeNames.AVATAR) return catalogStore.setCatalogs(avatarCatalogs.value)
    if (routeName === routeNames.BADGE) return catalogStore.setCatalogs(badgeCatalogs.value)
    if (routeName === routeNames.CARD) return catalogStore.setCatalogs(cardCatalogs.value)
    if (routeName === routeNames.CAROUSEL) return catalogStore.setCatalogs(carouselCatalogs.value)
    if (routeName === routeNames.IMAGE) return catalogStore.setCatalogs(imageCatalogs.value)
    if (routeName === routeNames.LIST) return catalogStore.setCatalogs(listCatalogs.value)
    if (routeName === routeNames.TABLE) return catalogStore.setCatalogs(tableCatalogs.value)
    if (routeName === routeNames.TOOLTIP) return catalogStore.setCatalogs(tooltipCatalogs.value)
    if (routeName === routeNames.TABS) return catalogStore.setCatalogs(tabsCatalogs.value)
    if (routeName === routeNames.ACCORDION) return catalogStore.setCatalogs(accordionCatalogs.value)
    if (routeName === routeNames.ALERT) return catalogStore.setCatalogs(alertCatalogs.value)
    if (routeName === routeNames.MESSAGE) return catalogStore.setCatalogs(toastCatalogs.value)
    if (routeName === routeNames.DRAWER) return catalogStore.setCatalogs(drawerCatalogs.value)
    if (routeName === routeNames.MODAL) return catalogStore.setCatalogs(modalCatalogs.value)
    if (routeName === routeNames.LOADING) return catalogStore.setCatalogs(loadingCatalogs.value)
    if (routeName === routeNames.FORM) return catalogStore.setCatalogs(formCatalogs.value)
  })
}

export default useCatalog
