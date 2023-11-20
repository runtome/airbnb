import { User , Listing , Reservation} from "@prisma/client";

export type SafeListings = Omit<
 Listing ,
 "createdAt"
> & {
    createdAt:string;
}

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListings;
};

export type SafeUser =Omit<
 User,
 "createdAtd" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified:string | null
}