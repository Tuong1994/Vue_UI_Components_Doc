import type { ComponentColor, ComponentShape } from "@/common/type";

export type PaginationActionType = 'first' | 'prev' | 'page' | 'next' | 'last';

export type PaginationColor = Exclude<ComponentColor, 'white' | 'gray'>

export type PaginationShape = Exclude<ComponentShape, 'circle'>