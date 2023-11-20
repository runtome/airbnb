import prisma from '@/app/libs/prismadb'

interface IParams {
    listingId? : string
}

export default async function getListingById(
    params:IParams
){
    try{
        const { listingId} = params;

        const listing = await prisma.listing.findUnique({
            where : {
                id: listingId,
            },
            include:{
                user: true
            }
        });

        if (!listing){
            return null;
        }

        return {
            ...listing, 
            createdAt: listing.user.createdAt.toString(),
            updateAt: listing.user.updatedAt.toString(),
            emailVerfied:
             listing.user.emailVerified?.toString() || null,
        };

    } catch (error:any){
        throw new Error(error)
    }
}