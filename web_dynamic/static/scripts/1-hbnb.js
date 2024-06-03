
$(document).ready(()=>{
    const checkedAmenities = {};

    $("input[type='checkbox']").change(function (){
        const amenityId = $(this).data("id");
        if ($(this).is(":checked")) {
            checkedAmenities[amenityId] = $(this).data("name");
        } else {
            delete checkedAmenities[amenityId];
        }
        updateAmenitiesList();
    });

    function updateAmenitiesList() {
        const $amenitiesList = $("#amenities-list");
        $amenitiesList.empty();
        
        for (const amenityId in checkedAmenities) {
            const $amenityName = $("<span>").text(`Amenity ${amenityId}`);
            $amenitiesList.append($amenityName);
        }
    }
});