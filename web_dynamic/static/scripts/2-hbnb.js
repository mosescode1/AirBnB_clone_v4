
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

$(document).ready(()=>{
    $.get("http://0.0.0.0:5001/api/v1/status/", function(body,status, xhr){
        if (status == 'success'){
            console.log("entered");
            $("#api_status").addClass("available");
        }
    });
});