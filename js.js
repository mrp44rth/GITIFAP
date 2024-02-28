// Sample data (you can replace this with your actual data)
const data = [
["Anita","08467768","./FAP/FAP_ANITA_38/1.bmp","./FAP/FAP_ANITA_38/2.bmp","./FAP/FAP_ANITA_38/3.bmp","./FAP/FAP_ANITA_38/4.bmp","./FAP/FAP_ANITA_38/5.bmp"],
["Anjali","73910596","./FAP/FAP_ANJALI_83/1.bmp","./FAP/FAP_ANJALI_83/2.bmp","./FAP/FAP_ANJALI_83/3.bmp","./FAP/FAP_ANJALI_83/4.bmp","./FAP/FAP_ANJALI_83/5.bmp"],
["Anju Tiwari","37113295","./FAP/FAP_ANJU_TIWARI_109/1.bmp","./FAP/FAP_ANJU_TIWARI_109/2.bmp","./FAP/FAP_ANJU_TIWARI_109/3.bmp","./FAP/FAP_ANJU_TIWARI_109/4.bmp","./FAP/FAP_ANJU_TIWARI_109/5.bmp"],
["Antima Sharma","74680625","./FAP/FAP_ANTIMA_SHARMA_82/1.bmp","./FAP/FAP_ANTIMA_SHARMA_82/2.bmp","./FAP/FAP_ANTIMA_SHARMA_82/3.bmp","./FAP/FAP_ANTIMA_SHARMA_82/4.bmp","./FAP/FAP_ANTIMA_SHARMA_82/5.bmp"],
["Antima Tiwari","46678099","./FAP/FAP_ANTIMA_TIWARI_33/1.bmp","./FAP/FAP_ANTIMA_TIWARI_33/2.bmp","./FAP/FAP_ANTIMA_TIWARI_33/3.bmp","./FAP/FAP_ANTIMA_TIWARI_33/4.bmp","./FAP/FAP_ANTIMA_TIWARI_33/5.bmp"],
["Aradhana Maurya","85374056","./FAP/FAP_ARADHANA_MAURYA_9/1.bmp","./FAP/FAP_ARADHANA_MAURYA_9/2.bmp","./FAP/FAP_ARADHANA_MAURYA_9/3.bmp","./FAP/FAP_ARADHANA_MAURYA_9/4.bmp","./FAP/FAP_ARADHANA_MAURYA_9/5.bmp"],
["Diksha Sharma","06578581","./FAP/FAP_DIKSHA_87/1.bmp","./FAP/FAP_DIKSHA_87/2.bmp","./FAP/FAP_DIKSHA_87/3.bmp","./FAP/FAP_DIKSHA_87/4.bmp","./FAP/FAP_DIKSHA_87/5.bmp"],
["Firoj Ali","***","./FAP/FAP_FIROJ_ALI_114/1.bmp","./FAP/FAP_FIROJ_ALI_114/2.bmp","./FAP/FAP_FIROJ_ALI_114/3.bmp","./FAP/FAP_FIROJ_ALI_114/4.bmp","./FAP/FAP_FIROJ_ALI_114/5.bmp"],
["Kajal Vishwakarma","74677076","./FAP/FAP_KAJAL_VISHWAKARMA_49/1.bmp","./FAP/FAP_KAJAL_VISHWAKARMA_49/2.bmp","./FAP/FAP_KAJAL_VISHWAKARMA_49/3.bmp","./FAP/FAP_KAJAL_VISHWAKARMA_49/4.bmp","./FAP/FAP_KAJAL_VISHWAKARMA_49/5.bmp"],
["Khusboo 52","53270724","./FAP/FAP_KHUSHBOO_52/1.bmp","./FAP/FAP_KHUSHBOO_52/2.bmp","./FAP/FAP_KHUSHBOO_52/3.bmp","./FAP/FAP_KHUSHBOO_52/4.bmp","./FAP/FAP_KHUSHBOO_52/5.bmp"],
["Khusboo 115","***","./FAP/FAP_KHUSHBOO_115/1.bmp","./FAP/FAP_KHUSHBOO_115/2.bmp","./FAP/FAP_KHUSHBOO_115/3.bmp","./FAP/FAP_KHUSHBOO_115/4.bmp","./FAP/FAP_KHUSHBOO_115/5.bmp"],
["Komal Sharma","49280886","./FAP/FAP_KOMAL_SHRMA_80/1.bmp","./FAP/FAP_KOMAL_SHRMA_80/2.bmp","./FAP/FAP_KOMAL_SHRMA_80/3.bmp","./FAP/FAP_KOMAL_SHRMA_80/4.bmp","./FAP/FAP_KOMAL_SHRMA_80/5.bmp"],
["Lakshmi Devi","23843784","./FAP/FAP_LAKSHMI_15/1.bmp","./FAP/FAP_LAKSHMI_15/2.bmp","./FAP/FAP_LAKSHMI_15/3.bmp","./FAP/FAP_LAKSHMI_15/4.bmp","./FAP/FAP_LAKSHMI_15/5.bmp"],
["Manju","57182923","./FAP/TR_MANJU_/1.bmp","./FAP/TR_MANJU_/2.bmp","./FAP/TR_MANJU_/3.bmp","./FAP/TR_MANJU_/4.bmp","./FAP/TR_MANJU_/5.bmp"],
["Nandini","5268625","./FAP/FAP_NANDNI_85/1.bmp","./FAP/FAP_NANDNI_85/2.bmp","./FAP/FAP_NANDNI_85/3.bmp","./FAP/FAP_NANDNI_85/4.bmp","./FAP/FAP_NANDNI_85/5.bmp"],
["Neelam Maurya","29234077","./FAP/FAP_NEELAM_MAURYA_36/1.bmp","./FAP/FAP_NEELAM_MAURYA_36/2.bmp","./FAP/FAP_NEELAM_MAURYA_36/3.bmp","./FAP/FAP_NEELAM_MAURYA_36/4.bmp","./FAP/FAP_NEELAM_MAURYA_36/5.bmp"],
["Neha","10798652","./FAP/FAP_NEHA_/1.bmp","./FAP/FAP_NEHA_/2.bmp","./FAP/FAP_NEHA_/3.bmp","./FAP/FAP_NEHA_/4.bmp","./FAP/FAP_NEHA_/5.bmp"],
["Nikita Dubey","24152609","./FAP/FAP_NIKITA_DUBEY_59/1.bmp","./FAP/FAP_NIKITA_DUBEY_59/2.bmp","./FAP/FAP_NIKITA_DUBEY_59/3.bmp","./FAP/FAP_NIKITA_DUBEY_59/4.bmp","./FAP/FAP_NIKITA_DUBEY_59/5.bmp"],
["Nisha Vishwakarma","16379259","./FAP/FAP_NISHA_VISHWAKARMA_26/1.bmp","./FAP/FAP_NISHA_VISHWAKARMA_26/2.bmp","./FAP/FAP_NISHA_VISHWAKARMA_26/3.bmp","./FAP/FAP_NISHA_VISHWAKARMA_26/4.bmp","./FAP/FAP_NISHA_VISHWAKARMA_26/5.bmp"],
["Pallavi","40932336","./FAP/FAP_PALLVI_111/1.bmp","./FAP/FAP_PALLVI_111/2.bmp","./FAP/FAP_PALLVI_111/3.bmp","./FAP/FAP_PALLVI_111/4.bmp","./FAP/FAP_PALLVI_111/5.bmp"],
["Poonam Maurya","65286330","./FAP/FAP_POONAM_MAURYA_37/1.bmp","./FAP/FAP_POONAM_MAURYA_37/2.bmp","./FAP/FAP_POONAM_MAURYA_37/3.bmp","./FAP/FAP_POONAM_MAURYA_37/4.bmp","./FAP/FAP_POONAM_MAURYA_37/5.bmp"],
["Preeti Devi","51957772","./FAP/FAP_PREETI_16/1.bmp","./FAP/FAP_PREETI_16/2.bmp","./FAP/FAP_PREETI_16/3.bmp","./FAP/FAP_PREETI_16/4.bmp","./FAP/FAP_PREETI_16/5.bmp"],
["Rekha","04247293","./FAP/FAP_REKHA_/1.bmp","./FAP/FAP_REKHA_/2.bmp","./FAP/FAP_REKHA_/3.bmp","./FAP/FAP_REKHA_/4.bmp","./FAP/FAP_REKHA_/5.bmp"],
["Roshni Prajapati","80376950","./FAP/FAP_ROSHANI_PRAJAPATI_/1.bmp","./FAP/FAP_ROSHANI_PRAJAPATI_/2.bmp","./FAP/FAP_ROSHANI_PRAJAPATI_/3.bmp","./FAP/FAP_ROSHANI_PRAJAPATI_/4.bmp","./FAP/FAP_ROSHANI_PRAJAPATI_/5.bmp"],
["Sanjana","03647390","./FAP/FAP_SANJANA_112/1.bmp","./FAP/FAP_SANJANA_112/2.bmp","./FAP/FAP_SANJANA_112/3.bmp","./FAP/FAP_SANJANA_112/4.bmp","./FAP/FAP_SANJANA_112/5.bmp"],
["Sarita Maurya","42243539","./FAP/FAP_SARITA_MAURYA_116/1.bmp","./FAP/FAP_SARITA_MAURYA_116/2.bmp","./FAP/FAP_SARITA_MAURYA_116/3.bmp","./FAP/FAP_SARITA_MAURYA_116/4.bmp","./FAP/FAP_SARITA_MAURYA_116/5.bmp"],
["Shikha Tiwari","24730372","./FAP/FAP_SHIKHA_TIWARI_108/1.bmp","./FAP/FAP_SHIKHA_TIWARI_108/2.bmp","./FAP/FAP_SHIKHA_TIWARI_108/3.bmp","./FAP/FAP_SHIKHA_TIWARI_108/4.bmp","./FAP/FAP_SHIKHA_TIWARI_108/5.bmp"],
["Shyama Maurya","19551677","./FAP/FAP_SHYAMA_MAURYA_72/1.bmp","./FAP/FAP_SHYAMA_MAURYA_72/2.bmp","./FAP/FAP_SHYAMA_MAURYA_72/3.bmp","./FAP/FAP_SHYAMA_MAURYA_72/4.bmp","./FAP/FAP_SHYAMA_MAURYA_72/5.bmp"],
["Usha","67902290","./FAP/FAP_USHA_29/1.bmp","./FAP/FAP_USHA_29/2.bmp","./FAP/FAP_USHA_29/3.bmp","./FAP/FAP_USHA_29/4.bmp","./FAP/FAP_USHA_29/5.bmp"],
["Vandana Maurya","37220808","./FAP/FAP_VANDANA_MAURYA_35/1.bmp","./FAP/FAP_VANDANA_MAURYA_35/2.bmp","./FAP/FAP_VANDANA_MAURYA_35/3.bmp","./FAP/FAP_VANDANA_MAURYA_35/4.bmp","./FAP/FAP_VANDANA_MAURYA_35/5.bmp"],
["Varsha","13740098","./FAP/FAP_VARSHA_32/1.bmp","./FAP/FAP_VARSHA_32/2.bmp","./FAP/FAP_VARSHA_32/3.bmp","./FAP/FAP_VARSHA_32/4.bmp","./FAP/FAP_VARSHA_32/5.bmp"],
         // 1-30 are done....
// adding more rows..

];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 2 && index <= 6) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
