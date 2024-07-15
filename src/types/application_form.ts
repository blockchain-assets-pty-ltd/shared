import type { DateTime } from "luxon"

export type ContactDetails = {
    name: string
    phone: string
    email: string
    mailingAddress: string
}

export type BankDetails = {
    name: string
    accountName: string
    bsb: string
    accountNumber: string
}

export type InvestmentDetails = {
    amount: Big
    date: DateTime
    reinvestDistributions: boolean
}

export type SignatoryDetails = {
    name: string
    dateOfBirth: DateTime
    dateSigned: DateTime
    signatureImgBase64: string
}

export type IndividualDetails = {
    name: string
    tfn: string
    dateOfBirth: DateTime
    countryOfTaxResidency: string
    registeredAddress: string
}

type IndividualTrusteeDetails = {
    name: string
    dateOfBirth: DateTime
}

type CompanyDirectorDetails = IndividualTrusteeDetails

type CorporateTrusteeDetails = {
    name: string
    abn: string
    companyExtract: File | null
    companyDirectors: CompanyDirectorDetails[]
}

export type TrustDetails = {
    name: string
    abn: string
    tfn: string
    registeredAddress: string
    principalPlaceOfBusinessAddress: string
    trustDeed: File | null
    corporateTrustee?: CorporateTrusteeDetails
    individualTrustees?: IndividualTrusteeDetails[]
}

export type SuperannuationFundDetails = TrustDetails

export type CompanyDetails = {
    name: string
    abn: string
    tfn: string
    registeredAddress: string
    principalPlaceOfBusinessAddress: string
    globalIntermediaryNumber: string | null
    companyExtract: File | null
    companyDirectors: CompanyDirectorDetails[]
}

export type CommonApplicationFormData = {
    contact: ContactDetails
    bank: BankDetails
    investment: InvestmentDetails
    signatories: SignatoryDetails[]
    idDocuments: File[] | null
    qualifiedAccountantCertificates: File[] | null
    allSignaturesRequired: boolean
}

export type ApplicationForm = {
    entityType: "Individual"
    formData: (CommonApplicationFormData & { individual: IndividualDetails }) | null
} | {
    entityType: "Joint Individual"
    formData: (CommonApplicationFormData & { individuals: IndividualDetails[] }) | null
} | {
    entityType: "Company"
    formData: (CommonApplicationFormData & { company: CompanyDetails }) | null
} | {
    entityType: "Trust"
    formData: (CommonApplicationFormData & { trust: TrustDetails }) | null
} | {
    entityType: "Superannuation Fund"
    formData: (CommonApplicationFormData & { superannuationFund: SuperannuationFundDetails }) | null
}
