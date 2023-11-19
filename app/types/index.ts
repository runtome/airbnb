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
 "createAt" | "updateAt" | "emailVerified"
> & {
    createAt: string;
    updateAt: string;
    emailVerified:string | null
}