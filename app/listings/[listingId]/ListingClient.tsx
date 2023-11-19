'use client'

import { Reservation } from "@prisma/client";
import { SafeListings, SafeUser } from "@/app/types";
import { useMemo } from "react";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";

interface ListingClientprops{
    reservation?: Reservation[];
    listing : SafeListings & {
        user: SafeUser
    };
    currentUser?: SafeUser | null; 
}

const ListingClient: React.FC<ListingClientprops> = ({
    listing,
    currentUser
}) => {
    const category = useMemo(() => {
        return categories.find((items) => 
        items.label === listing.category);
    },[listing.category])

    return(
        <Container>
            <div 
                className="
                max-w-screen-lg 
                mx-auto
                "
            >
                <div className="flex flex-col gap-6">
                <ListingHead
                    title={listing.title}
                    imageSrc={listing.imageSrc}
                    locationValue={listing.locationValue}
                    id={listing.id}
                    currentUser={currentUser}
                />
                </div>
            </div>
        </Container>
    )
}

export default ListingClient;