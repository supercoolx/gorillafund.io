export interface ProjectInterface {
    uid: string
    img: string
    title: string
    content: string
    donate: string
    goal: number
    raise: number
}

export interface WhyFundInterface {
    icon: string
    title: string
    content: string
}

export interface FundStoryInterface {
    title: string
    content: string
}

export interface ButtonInterface {
    icon: JSX.Element
    text: string
    value: number
}

export interface StepInterface {
    title: string
    text: string
}

export interface SelectPurposeInterface {
    value: number,
    label: string
}