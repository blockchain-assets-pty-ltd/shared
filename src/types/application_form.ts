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
    reinvestDistributions: false
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
    idDocuments: File | null
    allSignaturesRequired: boolean
}

export type EntitySpecificApplicationFormData = {
    entityType: "Individual"
    individual: IndividualDetails
} | {
    entityType: "Company"
    company: CompanyDetails
} | {
    entityType: "Trust"
    trust: TrustDetails
} | {
    entityType: "Superannuation Fund"
    superannuationFund: SuperannuationFundDetails
} | {
    entityType: "Partnership"
    partners: IndividualDetails[]
}
