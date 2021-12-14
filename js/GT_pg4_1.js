
      function filter(){

        var value, name, item, i;

        value = document.getElementById("value").value.toUpperCase();
        item = document.getElementsByClassName("item");

        for(i=0;i<item.length;i++){
          name = item[i].getElementsByClassName("name");
          if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
            item[i].style.display = "flex";
          }else{
            item[i].style.display = "none";
          }
        }
      }

//시작24개
function setItem1_1(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/투명와드.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3340.png'></div><div id='item_info' style='float:left;'><b><br><br>　투명 와드</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 0</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 장신구: 아군 모두에게 90~120초 동안 주변 지역을 밝혀 주는 투명 와드 하나를 지면에 설치합니다.<br>　　　　　　　　투명 와드는 최대 2개까지 보유할 수 있으며 240~120초마다 하나씩 생성됩니다.</div></div>";

}

function setItem1_2(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/망원형개조.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3363.png'></div><div id='item_info' style='float:left;'><b><br><br>　망원형 개조</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 0</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 장신구: 누구나 볼 수 있고 쉽게 파괴 가능한 와드를 설치해 주변 지역을 드러냅니다.<br>　　　　　　　　최대 4000 유닛 범위까지 설치 가능하며 아군이 소환사 주문이나 스킬의 대상으로 지정할 수 없습니다.<br>　　　　　　　　(재사용 대기시간 198~99초)</div></div>";

}

function setItem1_3(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/예언자의렌즈.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3364.png'></div><div id='item_info' style='float:left;'><b><br><br>　예언자의 렌즈</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 0</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 장신구: 10초 동안 근처를 수색해 적 유닛이 숨어 있으면 경고를 보내며 주변의 투명한 덫을 드러냅니다.<br>　　　　　　　　또한 적의 투명 와드를 드러내고 잠시 무력화시킵니다. (재사용 대기시간 90~60초)</div></div>";

}

function setItem1_4(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/체력물약.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2003.png'></div><div id='item_info' style='float:left;'><b><br><br>　체력 물약</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 50</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 소모: 15초에 걸쳐 150의 체력을 회복합니다.<br>　　　　　　　　최대로 보유할 수 있는 체력 물약 수는 5개입니다.</div></div>";

}

function setItem1_5(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/제어와드.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2055.png'></div><div id='item_info' style='float:left;'><b><br><br>　제어 와드</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 75</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 소모: 주변 지역을 드러내 주는 강력한 제어 와드를 설치합니다.<br>　　　　　　　　근처의 투명한 덫과 위장 중인 적을 드러내고 적의 투명 와드를 감지해 무력화합니다.<br>　　　　　　　　최대 2개의 제어 와드를 소지할 수 있습니다. 제어 와드로 다른 제어 와드를 무력화시킬 수 없습니다.</div></div>";

}

function setItem1_6(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2033.png' onclick='setItem1_20()' style='cursor:pointer' title='부패 물약'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/충전형물약.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2031.png'></div><div id='item_info' style='float:left;'><b><br><br>　충전형 물약</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 150</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 소모: 충전량을 1회 소모해 12초 동안 125의 체력을 회복합니다.<br>　　　　　　　　충전량은 최대 2회이며 상점 방문 시 다시 채워집니다.</div></div>";

}

function setItem1_7(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/잉걸불칼.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1035.png'></div><div id='item_info' style='float:left;'><b><br><br>　잉걸불 칼</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 350</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　몬스터 대상 모든 피해 흡혈 8%<br><br>　　　　　　　　불태우기: 몬스터에게 피해를 입히면 5초 동안 불태워 60+주문력의 30%+추가 공격력의 5%+추가 체력의 2%의 <br>　　　　　　　　마법 피해를 입힙니다.<br>　　　　　　　　승부의 길: 강타를 5회 사용하면 이 아이템을 소모해 강타를 승부의 강타로 업그레이드하고 몬스터에게 입히는 피해량을<br>　　　　　　　　증가시킵니다. 승부의 강타는 4초 동안 챔피언에게 표식을 남깁니다. 표식이 있는 동안 대상에게 적중 시 2.5초에 걸쳐<br>　　　　　　　　48~125(레벨에 비례)의 추가 고정 피해를 입히고, 대상으로부터 입는 피해량은 20% 감소합니다.<br>　　　　　　　　사냥꾼: 대형 몬스터 처치 시 추가 경험치를 얻습니다.<br>　　　　　　　　만회: 정글 또는 강에 있을 때 초당 8~18(레벨에 비례)의 마나를 회복합니다.<br><br>　　　　　　　　이 아이템을 소모하면 모든 아이템의 효과를 영구히 얻고 몬스터에게 입히는 강타 피해가 증가합니다. 정글 몬스터보다<br>　　　　　　　　미니언으로부터 더 많은 골드를 획득했다면, 미니언으로부터 얻는 골드와 경험치가 크게 감소합니다. 광역 공격 시에는<br>　　　　　　　　체력 회복 감소 효과가 적용되지 않습니다. 게임의 평균 챔피언 레벨보다 2레벨 뒤쳐졌다면 몬스터 처치 시 추가 경험치를 <br>　　　　　　　　얻습니다.<br><br>　　　　　　　　승부의 강타는 기본 공격 또는 스킬로 피해를 입힐 때만 대상을 불태웁니다.</div></div>";

}

function setItem1_8(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/빗발칼날.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1039.png'></div><div id='item_info' style='float:left;'><b><br><br>　빗발칼날</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 350</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　몬스터 대상 모든 피해 흡혈 8%<br><br>　　　　　　　　불태우기: 몬스터에게 피해를 입히면 5초 동안 불태워 60+주문력의 30%+추가 공격력의 5%+추가 체력의 2%의 <br>　　　　　　　　마법 피해를 입힙니다.<br>　　　　　　　　차가운 길: 강타를 5회 사용하면 이 아이템을 소모해 강타를 혹한의 강타로 업그레이드하고 몬스터에게 입히는 피해량을<br>　　　　　　　　증가시킵니다. 혹한의 강타를 챔피언에게 사용하면 20~156(레벨에 비례)의 고정 피해를 입히고 2초 동안 이동 속도를<br>　　　　　　　　20% 훔칩니다.<br>　　　　　　　　사냥꾼: 대형 몬스터 처치 시 추가 경험치를 얻습니다.<br>　　　　　　　　만회: 정글 또는 강에 있을 때 초당 8~18(레벨에 비례)의 마나를 회복합니다.<br><br>　　　　　　　　이 아이템을 소모하면 모든 아이템의 효과를 영구히 얻고 몬스터에게 입히는 강타 피해가 증가합니다.<br>　　　　　　　　정글 몬스터보다 미니언으로부터 더 많은 골드를 획득했다면, 미니언으로부터 얻는 골드와 경험치가 크게 감소합니다.<br>　　　　　　　　광역 공격 시에는 체력 회복 감소 효과가 적용되지 않습니다.<br>　　　　　　　　게임의 평균 챔피언 레벨보다 2레벨 뒤쳐졌다면 몬스터 처치 시 추가 경험치를 얻습니다.</div></div>";

}

function setItem1_9(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/흑요석검.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1040.png'></div><div id='item_info' style='float:left;'><b><br><br>　흑요석 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 350</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　몬스터 대상 모든 피해 흡혈 8%<br><br>　　　　　　　　불태우기: 몬스터에게 피해를 입히면 5초 동안 불태워 60+주문력의 30%+추가 공격력의 5%+추가 체력의 2%에 해당하는<br>　　　　　　　　마법 피해를 입힙니다.<br>　　　　　　　　자동의 길: 강타를 5회 사용하면 이 아이템을 소모해 자동 강타를 업그레이드하며 몬스터에게 입히는 피해가 증가합니다.<br>　　　　　　　　사냥꾼: 대형 몬스터 처치 시 추가 경험치를 얻습니다.<br>　　　　　　　　만회: 정글 또는 강에 있을 때 초당 8~18(레벨에 비례)의 마나를 회복합니다.<br><br>　　　　　　　　이 아이템을 소모하면 모든 아이템의 효과를 영구히 얻고 몬스터에게 입히는 강타 피해가 증가합니다. <br>　　　　　　　　정글 몬스터보다 미니언으로부터 더 많은 골드를 획득했다면, 미니언으로부터 얻는 골드와 경험치가 크게 감소합니다.<br>　　　　　　　　광역 공격 시에는 체력 회복 감소 효과가 적용되지 않습니다.<br>　　　　　　　　게임의 평균 챔피언 레벨보다 2레벨 뒤쳐졌다면 몬스터 처치 시 추가 경험치를 얻습니다.</div></div>";

}

function setItem1_10(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3041.png' onclick='setItem4_1()' style='cursor:pointer' title='메자이의 영혼 약탈자'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/암흑의인장.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1082.png'></div><div id='item_info' style='float:left;'><b><br><br>　암흑의 인장</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 350</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 15<br>　　　　　　　　체력 40<br><br>　　　　　　　　영광: 적 챔피언을 처치할 때마다 중첩 2회, 어시스트를 올릴 때마다 중첩 1회가 쌓입니다. 최대 10회까지 쌓을 수 있으며<br>　　　　　　　　사망 시 중첩 5회가 사라집니다.<br>　　　　　　　　두려움: 영광 중첩 하나당 주문력을 4 얻습니다.<br><br>　　　　　　　　획득한 영광 중첩은 이 아이템과 메자이의 영혼약탈자에 모두 적용됩니다.</div></div>";

}

function setItem1_11(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/도란의반지.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1056.png'></div><div id='item_info' style='float:left;'><b><br><br>　도란의 반지</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 15<br>　　　　　　　　체력 70<br>　　　　　　　　집중: 미니언에게 기본 공격 시 5의 물리 피해를 추가로 입힙니다.<br>　　　　　　　　흡수: 매초 0.75의 마나를 회복합니다.<br><br>　　　　　　　　적 챔피언에게 피해를 입히면 10초 동안 회복량이 1.25마나로 증가합니다.<br>　　　　　　　　마나를 회복할 수 없으면 회복량의 50%만큼 체력을 회복합니다.</div></div>";

}

function setItem1_12(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3003.png' onclick='setItem4_37()' style='cursor:pointer' title='대천사의 지팡이'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3004.png' onclick='setItem4_32()' style='cursor:pointer' title='마나무네'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3119.png' onclick='setItem4_18()' style='cursor:pointer' title='혹한의 손길'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/여신의눈물.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3070.png'></div><div id='item_info' style='float:left;'><b><br><br>　여신의 눈물</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　마나 240<br><br>　　　　　　　　집중: 미니언에게 기본 공격 시 5의 물리 피해를 추가로 입힙니다.<br>　　　　　　　　마나 충전: 대상에게 스킬을 적중시키면 중첩을 하나 소모해 3의 추가 마나를 얻습니다. 챔피언 대상으로는 두 배로<br>　　　　　　　　적용됩니다. 추가 마나는 최대 360까지 얻을 수 있습니다.<br><br>　　　　　　　　8초마다 새로운 마나 충전 중첩을 얻습니다. (최대 4)</div></div>";

}

function setItem1_13(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/주문도둑의검.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3850.png'></div><div id='item_info' style='float:left;'><b><br><br>　주문도둑의 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 8<br>　　　　　　　　체력 10<br>　　　　　　　　기본 마나 재생 50%<br>　　　　　　　　10초당 골드 2<br><br>　　　　　　　　헌납: 아군 챔피언 근처에 있을 때, 챔피언과 구조물에 피해를 입히는 스킬을 사용하거나 기본 공격 시 20골드를 획득합니다.<br>　　　　　　　　30초당 최대 3번까지만 발동합니다.<br>　　　　　　　　퀘스트: 이 아이템으로 500골드를 획득하면 얼음 송곳니로 변하며 사용 시 - 와드 설치 효과를 획득합니다.<br><br>　　　　　　　　너무 많은 미니언을 처치하면 미니언 처치 시 획득하는 골드가 감소합니다.</div></div>";

}

function setItem1_14(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/강철어깨보호대.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3854.png'></div><div id='item_info' style='float:left;'><b><br><br>　강철 어깨 보호대</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 3<br>　　　　　　　　체력 30<br>　　　　　　　　기본 체력 재생 25%<br>　　　　　　　　10초당 골드 2<br><br>　　　　　　　　전리품: 아군 챔피언 근처에 있으면 기본 공격 시 최대 체력이 근접 챔피언의 경우 50% (원거리 챔피언의 경우 30%) 이하인<br>　　　　　　　　미니언을 즉시 처형하고 가장 가까운 아군 챔피언과 함께 같은 양의 골드를 획득합니다. 이 효과는 35초마다 재충전됩니다. <br>　　　　　　　　(최대 충전량 3회)<br>　　　　　　　　퀘스트: 이 아이템으로 500골드를 획득하면 룬 강철 어깨 갑옷으로 변하며 사용 시 - 와드 설치 효과를 획득합니다.<br><br>　　　　　　　　너무 많은 미니언을 처치하면 미니언 처치 시 획득하는 골드가 감소합니다.</div></div>";

}

function setItem1_15(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/고대유물방패.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3858.png'></div><div id='item_info' style='float:left;'><b><br><br>　고대유물 방패</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 5<br>　　　　　　　　체력 30<br>　　　　　　　　기본 체력 재생 25%<br>　　　　　　　　10초당 골드 2<br><br>　　　　　　　　전리품: 아군 챔피언 근처에 있으면 기본 공격 시 최대 체력이 근접 챔피언의 경우 50% (원거리 챔피언의 경우 30%) 이하인<br>　　　　　　　　미니언을 즉시 처형하고 가장 가까운 아군 챔피언과 함께 같은 양의 골드를 획득합니다. 이 효과는 35초마다 재충전됩니다. <br>　　　　　　　　(최대 충전량 3회)<br>　　　　　　　　퀘스트: 이 아이템으로 500골드를 획득하면 타곤 산의 방패로 변하며 사용 시 - 와드 설치 효과를 획득합니다.<br><br>　　　　　　　　너무 많은 미니언을 처치하면 미니언 처치 시 획득하는 골드가 감소합니다.</div></div>";

}

function setItem1_16(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/영혼의낫.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3862.png'></div><div id='item_info' style='float:left;'><b><br><br>　영혼의 낫</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 5<br>　　　　　　　　체력 10<br>　　　　　　　　기본 마나 재생 25%<br>　　　　　　　　10초당 골드 2<br><br>　　　　　　　　헌납: 아군 챔피언 근처에 있을 때, 챔피언과 구조물에 피해를 입히는 스킬을 사용하거나 기본 공격 시 20골드를 획득합니다. <br>　　　　　　　　30초당 최대 3번까지만 발동합니다.<br>　　　　　　　　퀘스트: 이 아이템으로 500골드를 획득하면 해로윙 초승달낫으로 변하며 사용 시 - 와드 설치 효과를 획득합니다.<br><br>　　　　　　　　너무 많은 미니언을 처치하면 미니언 처치 시 획득하는 골드가 감소합니다.</div></div>";

}

function setItem1_17(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/도란의방패.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1054.png'></div><div id='item_info' style='float:left;'><b><br><br>　도란의 방패</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 450</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 80<br><br>　　　　　　　　집중: 미니언에게 기본 공격 시 5의 물리 피해를 추가로 입힙니다.<br>　　　　　　　　회복: 5초마다 체력을 6 회복합니다.<br>　　　　　　　　견디기: 챔피언, 대형 정글 몬스터, 에픽 정글 몬스터에게 피해를 입으면 8초 동안 최대 40의 체력을 회복합니다. 회복량은 <br>　　　　　　　　체력이 낮을수록 증가합니다.<br><br>　　　　　　　　견디기 원거리 챔피언이 보유하거나 광역 또는 지속 피해를 입었을 때 기본 회복량의 66%만큼 회복합니다.</div></div>";

}

function setItem1_18(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/도란의검.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1055.png'></div><div id='item_info' style='float:left;'><b><br><br>　도란의 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 450</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 8<br>　　　　　　　　체력 80<br><br>　　　　　　　　전쟁광: 2.5%의 모든 피해 흡혈을 얻습니다.<br><br>　　　　　　　　광역 피해를 입히거나 소환물을 통해 피해를 입힐 때는 모든 피해 흡혈이 33%로 감소합니다.</div></div>";

}

function setItem1_19(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/수확의낫.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1083.png'></div><div id='item_info' style='float:left;'><b><br><br>　수확의 낫</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 450</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 7<br><br>　　　　　　　　기본 공격 적중 시 체력을 3 회복합니다.<br>　　　　　　　　수확: 공격로 미니언 처치 시 추가로 1골드를 얻습니다. 공격로 미니언을 총 100회 처치하면 즉시 350의 추가 골드를 얻고 <br>　　　　　　　　수확 효과가 비활성화됩니다.</div></div>";

}

function setItem1_20(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/부패물약.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2033.png'></div><div id='item_info' style='float:left;'><b><br><br>　부패 물약</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 소모: 충전량을 1회 소모해 12초 동안 125의 체력과 75의 마나를 회복합니다. 회복되는 동안 적 챔피언에게 <br>　　　　　　　　기본 공격 및 스킬 사용 시 적을 불태워 3초 동안 15(마나를 회복할 수 없을 때에는 20)의 마법 피해를 입힙니다. 충전량은 <br>　　　　　　　　최대 3회이며 상점 방문 시 다시 채워집니다.<Br><br>　　　　　　　　광역 또는 지속 피해로 발동된 부패 피해는 피해량이 50%로 감소됩니다.</div></div>";

}

function setItem1_21(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/수호자의뿔피리.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2051.png'></div><div id='item_info' style='float:left;'><b><br><br>　수호자의 뿔피리</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 950</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 150<br><br>　　　　　　　　회복: 5초마다 체력을 20 회복합니다.<br>　　　　　　　　불굴의 의지: 적 챔피언의 기본 공격과 스킬 공격 피해량을 15만큼 막아줍니다.<br>　　　　　　　　(지속 피해 스킬의 경우 25%의 효과)<br>　　　　　　　　전설급: 이 아이템은 전설급 아이템으로 간주됩니다.</div></div>";

}

function setItem1_22(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/수호자의보주.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3112.png'></div><div id='item_info' style='float:left;'><b><br><br>　수호자의 보주</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 950</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 40<br>　　　　　　　　체력 150<br><br>　　　　　　　　회복: 5초마다 10의 마나를 회복합니다.<br>　　　　　　　　마나를 획득할 수 없으면 15의 체력을 회복합니다.<br>　　　　　　　　전설급: 이 아이템은 전설급 아이템으로 간주됩니다.</div></div>";

}

function setItem1_23(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/수호자의검.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3177.png'></div><div id='item_info' style='float:left;'><b><br><br>　수호자의 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 950</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 30<br>　　　　　　　　체력 150<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　전설급: 이 아이템은 전설급 아이템으로 간주됩니다.</div></div>";

}

function setItem1_24(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/수호자의망치.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3184.png'></div><div id='item_info' style='float:left;'><b><br><br>　수호자의 망치</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 950</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 25<br>　　　　　　　　체력 150<br>　　　　　　　　생명력 흡수 10%<br><br>　　　　　　　　전설급: 이 아이템은 전설급 아이템으로 간주됩니다.</div></div>";

}

//기본17개


function setItem2_1(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3109.png' onclick='setItem4_4()' style='cursor:pointer' title='기사의 맹세'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3801.png' onclick='setItem3_1()' style='cursor:pointer' title='수정 팔 보호구'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/원기회복의구슬.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1006.png'></div><div id='item_info' style='float:left;'><b><br><br>　원기 회복의 구슬</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 150</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　기본 체력 재생 50%</div></div>";

}

function setItem2_2(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3114.png' onclick='setItem3_7()' style='cursor:pointer' title='금지된 우상'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4642.png' onclick='setItem3_19()' style='cursor:pointer' title='밴들유리 거울'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/요정의부적.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1004.png'></div><div id='item_info' style='float:left;'><b><br><br>　요정의 부적</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 250</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　기본 마나 재생 50%</div></div>";

}

function setItem2_3(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3111.png' onclick='setItem3_32()' style='cursor:pointer' title='헤르메스의 장화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3006.png' onclick='setItem3_27()' style='cursor:pointer' title='광전사의 군화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3009.png' onclick='setItem3_15()' style='cursor:pointer' title='신속의 장화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3020.png' onclick='setItem3_28()' style='cursor:pointer' title='마법사의 신발'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3047.png' onclick='setItem3_30()' style='cursor:pointer' title='판금 장화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3117.png' onclick='setItem3_22()' style='cursor:pointer' title='기동력의 장화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3158.png' onclick='setItem3_18()' style='cursor:pointer' title='명석함의 아이오니아 장화'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/장화.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1001.png'></div><div id='item_info' style='float:left;'><b><br><br>　장화</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　이동 속도 25</div></div>";

}

function setItem2_4(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3193.png' onclick='setItem4_57()' style='cursor:pointer' title='가고일의 돌갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3076.png' onclick='setItem3_6()' style='cursor:pointer' title='덤불 조끼'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1031.png' onclick='setItem3_3()' style='cursor:pointer' title='쇠사슬 조끼'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3024.png' onclick='setItem3_16()' style='cursor:pointer' title='얼음 방패'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3047.png' onclick='setItem3_30()' style='cursor:pointer' title='판금 장화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3082.png' onclick='setItem3_21()' style='cursor:pointer' title='파수꾼의 갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3105.png' onclick='setItem3_46()' style='cursor:pointer' title='군단의 방패'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3143.png' onclick='setItem4_25()' style='cursor:pointer' title='란두인의 예언'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3191.png' onclick='setItem3_23()' style='cursor:pointer' title='추적자의 팔목 보호대'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6662.png' onclick='setItem5_8()' style='cursor:pointer' title='서리불꽃 건틀릿'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6664.png' onclick='setItem5_9()' style='cursor:pointer' title='터보 화공 탱크'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/천갑옷.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1029.png'></div><div id='item_info' style='float:left;'><b><br><br>　천 갑옷</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 15</div></div>";

}

function setItem2_5(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1043.png' onclick='setItem3_20()' style='cursor:pointer' title='곡궁'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2015.png' onclick='setItem3_2()' style='cursor:pointer' title='키르히아이스의 파편'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3006.png' onclick='setItem3_27()' style='cursor:pointer' title='광전사의 군화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3051.png' onclick='setItem3_31()' style='cursor:pointer' title='온기가 필요한 자의 도끼'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3085.png' onclick='setItem4_16()' style='cursor:pointer' title='루난의 허리케인'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3086.png' onclick='setItem3_25()' style='cursor:pointer' title='열정의 검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3124.png' onclick='setItem4_19()' style='cursor:pointer' title='구인수의 격노검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6677.png' onclick='setItem3_10()' style='cursor:pointer' title='분노의 칼'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6670.png' onclick='setItem3_45()' style='cursor:pointer' title='절정의 화살'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/단검.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1042.png'></div><div id='item_info' style='float:left;'><b><br><br>　단검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 12%</div></div>";

}

function setItem2_6(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3024.png' onclick='setItem3_16()' style='cursor:pointer' title='얼음 방패'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3802.png' onclick='setItem3_43()' style='cursor:pointer' title='사라진 양피지'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/사파이어수정.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1027.png'></div><div id='item_info' style='float:left;'><b><br><br>　사파이어 수정</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 350</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　마나 250</div></div>";

}

function setItem2_7(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3179.png' onclick='setItem4_9()' style='cursor:pointer' title='그림자 검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1053.png' onclick='setItem3_13()' style='cursor:pointer' title='흡혈의 낫'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3004.png' onclick='setItem4_32()' style='cursor:pointer' title='마나무네'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6692.png' onclick='setItem5_11()' style='cursor:pointer' title='월식'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3035.png' onclick='setItem3_47()' style='cursor:pointer' title='최후의 속삭임'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3044.png' onclick='setItem3_29()' style='cursor:pointer' title='탐식의 망치'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3046.png' onclick='setItem4_15()' style='cursor:pointer' title='유령무희'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3051.png' onclick='setItem3_31()' style='cursor:pointer' title='온기가 필요한 자의 도끼'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3071.png' onclick='setItem4_53()' style='cursor:pointer' title='칠흑의 양날 도끼'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3091.png' onclick='setItem4_54()' style='cursor:pointer' title='마법사의 최후'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3123.png' onclick='setItem3_8()' style='cursor:pointer' title='처형인의 대검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3133.png' onclick='setItem3_33()' style='cursor:pointer' title='콜필드의 전투망치'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3134.png' onclick='setItem3_34()' style='cursor:pointer' title='톱날 단검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3155.png' onclick='setItem3_42()' style='cursor:pointer' title='주문포식자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3814.png' onclick='setItem4_35()' style='cursor:pointer' title='밤의 끝자락'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6670.png' onclick='setItem3_45()' style='cursor:pointer' title='절정의 화살'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/롱소드.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1036.png'></div><div id='item_info' style='float:left;'><b><br><br>　롱소드</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 350</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 10</div></div>";

}

function setItem2_8(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6035.png' onclick='setItem4_49()' style='cursor:pointer' title='은빛 여명'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1011.png' onclick='setItem3_12()' style='cursor:pointer' title='거인의 허리띠'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3165.png' onclick='setItem4_13()' style='cursor:pointer' title='모렐로노미콘'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6660.png' onclick='setItem3_37()' style='cursor:pointer' title='바미의 불씨'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3211.png' onclick='setItem3_39()' style='cursor:pointer' title='망령의 두건'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4629.png' onclick='setItem4_46()' style='cursor:pointer' title='우주의 추진력'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6609.png' onclick='setItem4_21()' style='cursor:pointer' title='화공 펑크 사슬검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3044.png' onclick='setItem3_29()' style='cursor:pointer' title='탐식의 망치'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4401.png' onclick='setItem4_36()' style='cursor:pointer' title='대자연의 힘'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3053.png' onclick='setItem4_52()' style='cursor:pointer' title='스테락의 도전'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3066.png' onclick='setItem3_4()' style='cursor:pointer' title='비상의 월갑'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3067.png' onclick='setItem3_5()' style='cursor:pointer' title='점화석'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3119.png' onclick='setItem4_18()' style='cursor:pointer' title='혹한의 손길'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3145.png' onclick='setItem3_26()' style='cursor:pointer' title='마법공학 교류 발전기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3742.png' onclick='setItem4_34()' style='cursor:pointer' title='망자의 갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3748.png' onclick='setItem4_60()' style='cursor:pointer' title='거대한 히드라'><br> <br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3801.png' onclick='setItem3_1()' style='cursor:pointer' title='수정 팔 보호구'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3814.png' onclick='setItem4_35()' style='cursor:pointer' title='밤의 끝자락'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4635.png' onclick='setItem3_44()' style='cursor:pointer' title='흡수의 시선'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/루비수정.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1028.png'></div><div id='item_info' style='float:left;'><b><br><br>　루비 수정</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 150</div></div>";

}

function setItem2_9(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3916.png' onclick='setItem3_9()' style='cursor:pointer' title='망각의 구'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3113.png' onclick='setItem3_11()' style='cursor:pointer' title='에테르 환영'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3108.png' onclick='setItem3_17()' style='cursor:pointer' title='악마의 마법서'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3115.png' onclick='setItem4_41()' style='cursor:pointer' title='내셔의 이빨'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3116.png' onclick='setItem4_42()' style='cursor:pointer' title='라일라이의 수정홀'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6616.png' onclick='setItem4_7()' style='cursor:pointer' title='흐르는 물의 지팡이'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3145.png' onclick='setItem3_26()' style='cursor:pointer' title='마법공학 교류 발전기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3152.png' onclick='setItem5_14()' style='cursor:pointer' title='마법공학 로켓 벨트'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3191.png' onclick='setItem3_23()' style='cursor:pointer' title='추적자의 팔목 보호대'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3504.png' onclick='setItem4_6()' style='cursor:pointer' title='불타는 향로'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3802.png' onclick='setItem3_43()' style='cursor:pointer' title='사라진 양피지'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4637.png' onclick='setItem4_47()' style='cursor:pointer' title='악마의 포옹'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4630.png' onclick='setItem3_40()' style='cursor:pointer' title='역병의 보석'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4632.png' onclick='setItem3_24()' style='cursor:pointer' title='신록의 장벽'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4635.png' onclick='setItem3_44()' style='cursor:pointer' title='흡수의 시선'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4636.png' onclick='setItem5_16()' style='cursor:pointer' title='밤의 수확자'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4642.png' onclick='setItem3_19()' style='cursor:pointer' title='밴들유리 거울'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4644.png' onclick='setItem5_6()' style='cursor:pointer' title='부서진 여왕의 왕관'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6656.png' onclick='setItem5_7()' style='cursor:pointer' title='만년서리'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/증폭의고서.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1052.png'></div><div id='item_info' style='float:left;'><b><br><br>　증폭의 고서</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 435</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 20</div></div>";

}

function setItem2_10(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3193.png' onclick='setItem4_57()' style='cursor:pointer' title='가고일 돌갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3211.png' onclick='setItem3_39()' style='cursor:pointer' title='망령의 두건'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1057.png' onclick='setItem3_14()' style='cursor:pointer' title='음전자 망토'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3111.png' onclick='setItem3_32()' style='cursor:pointer' title='헤르메스의 장화'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3105.png' onclick='setItem3_46()' style='cursor:pointer' title='군단의 방패'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3140.png' onclick='setItem3_41()' style='cursor:pointer' title='수은 장식띠'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3155.png' onclick='setItem3_42()' style='cursor:pointer' title='주문포식자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4632.png' onclick='setItem3_24()' style='cursor:pointer' title='신록의 장벽'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6662.png' onclick='setItem5_8()' style='cursor:pointer' title='서리불꽃 건틀릿'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6664.png' onclick='setItem5_9()' style='cursor:pointer' title='터보 화공 탱크'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/마법무효화의망토.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1033.png'></div><div id='item_info' style='float:left;'><b><br><br>　마법무효화의 망토</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 450</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　마법 저항력 25</div></div>";

}

function setItem2_11(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3072.png' onclick='setItem4_62()' style='cursor:pointer' title='피바라기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3031.png' onclick='setItem4_61()' style='cursor:pointer' title='무한의 대검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3036.png' onclick='setItem4_38()' style='cursor:pointer' title='도미닉경의 인사'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3095.png' onclick='setItem4_24()' style='cursor:pointer' title='폭풍갈퀴'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6675.png' onclick='setItem4_63()' style='cursor:pointer' title='나보리 신속검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3086.png' onclick='setItem3_25()' style='cursor:pointer' title='열정의 검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3124.png' onclick='setItem4_19()' style='cursor:pointer' title='구인수의 격노검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3139.png' onclick='setItem4_43()' style='cursor:pointer' title='헤르메스의 시미터'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3508.png' onclick='setItem4_31()' style='cursor:pointer' title='정수 약탈자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6671.png' onclick='setItem5_23()' style='cursor:pointer' title='돌풍'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6672.png' onclick='setItem5_24()' style='cursor:pointer' title='크라켄 학살자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6673.png' onclick='setItem5_25()' style='cursor:pointer' title='불멸의 철갑궁'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6676.png' onclick='setItem4_50()' style='cursor:pointer' title='징수의 총'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/민첩성의망토.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1018.png'></div><div id='item_info' style='float:left;'><b><br><br>　민첩성의 망토</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　치명타 확률 15%</div></div>";

}

function setItem2_12(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3026.png' onclick='setItem4_27()' style='cursor:pointer' title='수호 천사'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3157.png' onclick='setItem4_20()' style='cursor:pointer' title='존야의 모래시계'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/초시계.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2420.png'></div><div id='item_info' style='float:left;'><b><br><br>　초시계</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 650</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　사용 시 - 경직: 1회에 한해 2.5초 동안 무적 및 대상으로 지정할 수 없는 상태가 되지만, 그동안 아무런 행동도 할 수 없습니다. <br>　　　　　　　　이후 망가진 초시계로 변합니다.</div></div>";

}

function setItem2_13(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6632.png' onclick='setItem5_21()' style='cursor:pointer' title='신성한 파괴자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3100.png' onclick='setItem4_40()' style='cursor:pointer' title='리치 베인'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3078.png' onclick='setItem5_22()' style='cursor:pointer' title='삼위일체'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3508.png' onclick='setItem4_31()' style='cursor:pointer' title='정수 약탈자'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/광휘의검.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3057.png'></div><div id='item_info' style='float:left;'><b><br><br>　광휘의 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 700</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문 검: 스킬을 사용하고 나면 다음 기본 공격 시 기본 공격력의 100%에 해당하는 물리 피해(적중 시 )를 추가로 입힙니다. <br>　　　　　　　　(재사용 대기시간 1.5초)</div></div>";

}

function setItem2_14(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3165.png' onclick='setItem4_13()' style='cursor:pointer' title='모렐로노미콘'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4633.png' onclick='setItem5_15()' style='cursor:pointer' title='균열 생성기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3100.png' onclick='setItem4_40()' style='cursor:pointer' title='리치베인'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3003.png' onclick='setItem4_37()' style='cursor:pointer' title='대천사의 지팡이'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3115.png' onclick='setItem4_41()' style='cursor:pointer' title='내셔의 이빨'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3116.png' onclick='setItem4_42()' style='cursor:pointer' title='라일라이의 수정홀'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3135.png' onclick='setItem4_28()' style='cursor:pointer' title='공허의 지팡이'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3152.png' onclick='setItem5_14()' style='cursor:pointer' title='마법공학 로켓 벨트'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4637.png' onclick='setItem4_47()' style='cursor:pointer' title='악마의 포옹'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4636.png' onclick='setItem5_16()' style='cursor:pointer' title='밤의 수확자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6655.png' onclick='setItem5_18()' style='cursor:pointer' title='루덴의 메아리'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/방출의마법봉.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1026.png'></div><div id='item_info' style='float:left;'><b><br><br>　방출의 마법봉</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 850</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 40</div></div>";

}

function setItem2_15(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6035.png' onclick='setItem4_49()' style='cursor:pointer' title='은빛 여명'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3031.png' onclick='setItem4_61()' style='cursor:pointer' title='무한의 대검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6695.png' onclick='setItem4_22()' style='cursor:pointer' title='독사의 송곳니'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3077.png' onclick='setItem3_38()' style='cursor:pointer' title='티아맷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3053.png' onclick='setItem4_52()' style='cursor:pointer' title='스테락의 도전'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6675.png' onclick='setItem4_63()' style='cursor:pointer' title='나보리 신속검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3139.png' onclick='setItem4_43()' style='cursor:pointer' title='헤르메스의 시미터'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3153.png' onclick='setItem4_56()' style='cursor:pointer' title='몰락한 왕의 검'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3181.png' onclick='setItem4_30()' style='cursor:pointer' title='선체파괴자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6029.png' onclick='setItem3_36()' style='cursor:pointer' title='강철가시 채찍'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6333.png' onclick='setItem4_55()' style='cursor:pointer' title='죽음의 무도'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6671.png' onclick='setItem5_23()' style='cursor:pointer' title='돌풍'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6672.png' onclick='setItem5_24()' style='cursor:pointer' title='크라켄 학살자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6676.png' onclick='setItem4_50()' style='cursor:pointer' title='징수의 총'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/곡괭이.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1037.png'></div><div id='item_info' style='float:left;'><b><br><br>　곡괭이</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 875</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 25</div></div>";

}

function setItem2_16(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3089.png' onclick='setItem4_64()' style='cursor:pointer' title='라바돈의 죽음모자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4645.png' onclick='setItem4_48()' style='cursor:pointer' title='그림자불꽃'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/쓸데없이큰지팡이.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1058.png'></div><div id='item_info' style='float:left;'><b><br><br>　쓸데없이 큰 지팡이</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1250</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 60</div></div>";

}

function setItem2_17(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3026.png' onclick='setItem4_27()' style='cursor:pointer' title='수호 천사'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3072.png' onclick='setItem4_62()' style='cursor:pointer' title='피바라기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3031.png' onclick='setItem4_61()' style='cursor:pointer' title='무한의 대검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3095.png' onclick='setItem4_24()' style='cursor:pointer' title='폭풍갈퀴'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　<img src='./img/main_4/B.F.대검.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1038.png'></div><div id='item_info' style='float:left;'><b><br><br>　B.F. 대검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40</div></div>";

}

//서사급47개


function setItem3_1(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3109.png' onclick='setItem4_4()' style='cursor:pointer' title='기사의 맹세'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3083.png' onclick='setItem4_39()' style='cursor:pointer' title='워모그의 갑옷'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/수정팔보호구.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3801.png'></div><div id='item_info' style='float:left;'><b><br><br>　수정 팔 보호구</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 650</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 200<br>　　　　　　　　기본 체력 재생 50%</div></div>";

}

function setItem3_2(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3095.png' onclick='setItem4_24()' style='cursor:pointer' title='폭풍갈퀴'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3094.png' onclick='setItem4_11()' style='cursor:pointer' title='고속 연사포'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/키르히아이스의파편.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2015.png'></div><div id='item_info' style='float:left;'><b><br><br>　키르히아이스의 파편</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 700</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 15%<br><br>　　　　　　　　충전 상태: 이동하거나 공격하면 충전 상태로 공격할 수 있습니다.<br>　　　　　　　　충격: 충전 상태로 공격 시 80의 마법 피해를 추가로 입힙니다.</div></div>";

}

function setItem3_3(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3026.png' onclick='setItem4_27()' style='cursor:pointer' title='수호 천사'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3742.png' onclick='setItem4_34()' style='cursor:pointer' title='망자의 갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6333.png' onclick='setItem4_55()' style='cursor:pointer' title='죽음의 무도'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/쇠사슬조끼.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1031.png'></div><div id='item_info' style='float:left;'><b><br><br>　쇠사슬 조끼</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 40</div></div>";

}

function setItem3_4(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4401.png' onclick='setItem4_36()' style='cursor:pointer' title='대자연의 힘'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3742.png' onclick='setItem4_34()' style='cursor:pointer' title='망자의 갑옷'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/비상의월갑.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3066.png'></div><div id='item_info' style='float:left;'><b><br><br>　비상의 월갑</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 150<br><br>　　　　　　　　비행: 이동 속도가 5% 상승합니다.</div></div>";

}

function setItem3_5(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6632.png' onclick='setItem5_21()' style='cursor:pointer' title='신성한 파괴자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2065.png' onclick='setItem5_1()' style='cursor:pointer' title='슈렐리아의 군가'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3109.png' onclick='setItem4_4()' style='cursor:pointer' title='기사의 맹세'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3001.png' onclick='setItem5_2()' style='cursor:pointer' title='저녁갑주'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3003.png' onclick='setItem4_37()' style='cursor:pointer' title='대천사의 지팡이'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3065.png' onclick='setItem4_33()' style='cursor:pointer' title='정령의 형상'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3050.png' onclick='setItem4_8()' style='cursor:pointer' title='지크의 융합'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3071.png' onclick='setItem4_53()' style='cursor:pointer' title='칠흑의 양날 도끼'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3078.png' onclick='setItem5_22()' style='cursor:pointer' title='삼위일체'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3083.png' onclick='setItem4_39()' style='cursor:pointer' title='워모그의 갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3107.png' onclick='setItem4_3()' style='cursor:pointer' title='구원'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3119.png' onclick='setItem4_18()' style='cursor:pointer' title='혹한의 손길'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3143.png' onclick='setItem4_25()' style='cursor:pointer' title='란두인의 예언'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6617.png' onclick='setItem5_5()' style='cursor:pointer' title='월석 재생기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3190.png' onclick='setItem5_3()' style='cursor:pointer' title='강철의 솔라리 펜던트'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4005.png' onclick='setItem5_4()' style='cursor:pointer' title='제국의 명령'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4644.png' onclick='setItem5_6()' style='cursor:pointer' title='부서진 여왕의 왕관'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6656.png' onclick='setItem5_7()' style='cursor:pointer' title='만년서리'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6333.png' onclick='setItem4_55()' style='cursor:pointer' title='죽음의 무도'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6631.png' onclick='setItem5_20()' style='cursor:pointer' title='발걸음 분쇄기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/8001.png' onclick='setItem4_14()' style='cursor:pointer' title='증오의 사슬'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/8020.png' onclick='setItem4_26()' style='cursor:pointer' title='심연의 가면'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/점화석.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3067.png'></div><div id='item_info' style='float:left;'><b><br><br>　점화석</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 10</div></div>";

}

function setItem3_6(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3075.png' onclick='setItem4_23()' style='cursor:pointer' title='가시 갑옷'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/덤불조끼.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3076.png'></div><div id='item_info' style='float:left;'><b><br><br>　덤불 조끼</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 30<br><br>　　　　　　　　가시: 기본 공격에 맞으면 공격한 적에게 3의 마법 피해를 입히고, 대상이 챔피언일 경우 3초 동안 40%의 고통스러운 상처를<br>　　　　　　　　남깁니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem3_7(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3107.png' onclick='setItem4_3()' style='cursor:pointer' title='구원'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6616.png' onclick='setItem4_7()' style='cursor:pointer' title='흐르는 물의 지팡이'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3222.png' onclick='setItem4_5()' style='cursor:pointer' title='미카엘의 축복'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3504.png' onclick='setItem4_6()' style='cursor:pointer' title='불타는 향로'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/금지된우상.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3114.png'></div><div id='item_info' style='float:left;'><b><br><br>　금지된 우상</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　기본 마나 재생 50%<br>　　　　　　　　체력 회복 및 보호막 10%</div></div>";

}

function setItem3_8(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6609.png' onclick='setItem4_21()' style='cursor:pointer' title='화공 펑크 사슬검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3033.png' onclick='setItem4_10()' style='cursor:pointer' title='필멸자의 운명'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/처형인의대검.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3123.png'></div><div id='item_info' style='float:left;'><b><br><br>　처형인의 대검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 15<br><br>　　　　　　　　뽑아 찢기: 챔피언에게 물리 피해를 입히면 3초 동안 40%의 고통스러운 상처를 남깁니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem3_9(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3165.png' onclick='setItem4_13()' style='cursor:pointer' title='모렐로노미콘'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3011.png' onclick='setItem4_2()' style='cursor:pointer' title='화학공학 부패기'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/망각의구.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3916.png'></div><div id='item_info' style='float:left;'><b><br><br>　망각의 구</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 30<br><br>　　　　　　　　저주: 챔피언에게 마법 피해를 입히면 3초 동안 40%의 고통스러운 상처를 남깁니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem3_10(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3124.png' onclick='setItem4_19()' style='cursor:pointer' title='구인수의 격노검'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/분노의칼.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6677.png'></div><div id='item_info' style='float:left;'><b><br><br>　분노의 칼</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 25%<br><br>　　　　　　　　분노: 치명타 확률이 적중 시 피해량으로 전환됩니다. 치명타 확률 20%당 35의 피해(적중 시 )를 입힙니다.</div></div>";

}

function setItem3_11(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4629.png' onclick='setItem4_46()' style='cursor:pointer' title='우주의 추진력'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3100.png' onclick='setItem4_40()' style='cursor:pointer' title='리치 베인'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/에테르환영.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3113.png'></div><div id='item_info' style='float:left;'><b><br><br>　에테르 환영</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 850</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 30<br><br>　　　　　　　　활공: 이동 속도가 5% 상승합니다.</div></div>";

}

function setItem3_12(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3075.png' onclick='setItem4_23()' style='cursor:pointer' title='가시 갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3083.png' onclick='setItem4_39()' style='cursor:pointer' title='워모그의 갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3116.png' onclick='setItem4_42()' style='cursor:pointer' title='라일라이의 수정홀'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3748.png' onclick='setItem4_60()' style='cursor:pointer' title='거대한 히드라'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4637.png' onclick='setItem4_47()' style='cursor:pointer' title='악마의 포옹'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/8001.png' onclick='setItem4_14()' style='cursor:pointer' title='증오의 사슬'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/거인의허리띠.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1011.png'></div><div id='item_info' style='float:left;'><b><br><br>　거인의 허리띠</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 350</div></div>";

}

function setItem3_13(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3072.png' onclick='setItem4_62()' style='cursor:pointer' title='피바라기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6692.png' onclick='setItem5_11()' style='cursor:pointer' title='월식'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3074.png' onclick='setItem4_59()' style='cursor:pointer' title='굶주린 히드라'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3153.png' onclick='setItem4_56()' style='cursor:pointer' title='몰락한 왕의 검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6673.png' onclick='setItem5_25()' style='cursor:pointer' title='불멸의 철갑궁'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/흡혈의낫.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1053.png'></div><div id='item_info' style='float:left;'><b><br><br>　흡혈의 낫</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 15<br>　　　　　　　　생명력 흡수 10%</div></div>";

}

function setItem3_14(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4401.png' onclick='setItem4_36()' style='cursor:pointer' title='대자연의 힘'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3091.png' onclick='setItem4_54()' style='cursor:pointer' title='마법사의 최후'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3222.png' onclick='setItem4_5()' style='cursor:pointer' title='미카엘의 축복'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/음전자망토.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1057.png'></div><div id='item_info' style='float:left;'><b><br><br>　음전자 망토</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　마법 저항력 50</div></div>";

}

function setItem3_15(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/신속의장화.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3009.png'></div><div id='item_info' style='float:left;'><b><br><br>　신속의 장화</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　이동 속도 60<br><br>　　　　　　　　이동 속도 둔화 효과가 25% 줄어듭니다.</div></div>";

}

function setItem3_16(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3050.png' onclick='setItem4_8()' style='cursor:pointer' title='지크의 융합'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3110.png' onclick='setItem4_12()' style='cursor:pointer' title='얼어붙은 심장'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/얼음방패.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3024.png'></div><div id='item_info' style='float:left;'><b><br><br>　얼음 방패</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 20<br>　　　　　　　　마나 250<br>　　　　　　　　스킬 가속 10</div></div>";

}

function setItem3_17(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3102.png' onclick='setItem4_17()' style='cursor:pointer' title='벤시의 장막'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4629.png' onclick='setItem4_46()' style='cursor:pointer' title='우주의 추진력'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6653.png' onclick='setItem5_18()' style='cursor:pointer' title='리안드리의 고뇌'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3157.png' onclick='setItem4_20()' style='cursor:pointer' title='존야의 모래시계'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4628.png' onclick='setItem4_45()' style='cursor:pointer' title='지평선의 초점'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/악마의마법서.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3108.png'></div><div id='item_info' style='float:left;'><b><br><br>　악마의 마법서</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 35<br>　　　　　　　　스킬 가속 10</div></div>";

}

function setItem3_18(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/명석함의아이오니아장화.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3158.png'></div><div id='item_info' style='float:left;'><b><br><br>　명석함의 아이오니아 장화</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 950</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　스킬 가속 20<br>　　　　　　　　이동 속도 45<br><br>　　　　　　　　소환사 주문 가속이 12 증가합니다.<br><br>　　　　　　　　''CLE 20년 12월 10일 남부 지방의 패권을 두고 벌어진 녹서스와의 재경합에서 아이오니아의 승리를 기념하는 헌정 <br>　　　　　　　　아이템입니다.''</div></div>";

}

function setItem3_19(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2065.png' onclick='setItem5_1()' style='cursor:pointer' title='슈렐리아의 군가'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3011.png' onclick='setItem4_2()' style='cursor:pointer' title='화학공학 부패기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6617.png' onclick='setItem5_5()' style='cursor:pointer' title='월석 재생기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4005.png' onclick='setItem5_4()' style='cursor:pointer' title='제국의 명령'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/밴들유리거울.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4642.png'></div><div id='item_info' style='float:left;'><b><br><br>　밴들유리 거울</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 950</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 20<br>　　　　　　　　스킬 가속 10<br>　　　　　　　　기본 마나 재생 50%</div></div>";

}

function setItem3_20(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3115.png' onclick='setItem4_41()' style='cursor:pointer' title='내셔의 이빨'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3153.png' onclick='setItem4_56()' style='cursor:pointer' title='몰락한 왕의 검'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/곡궁.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/1043.png'></div><div id='item_info' style='float:left;'><b><br><br>　곡궁</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 25%<br><br>　　　　　　　　강철 촉: 기본 공격 시 15의 물리 피해(적중 시 )를 입힙니다.</div></div>";

}

function setItem3_21(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3110.png' onclick='setItem4_12()' style='cursor:pointer' title='얼어붙은 심장'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3143.png' onclick='setItem4_25()' style='cursor:pointer' title='란두인의 예언'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/파수꾼의갑옷.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3082.png'></div><div id='item_info' style='float:left;'><b><br><br>　파수꾼의 갑옷</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 40<br><br>　　　　　　　　견고: 기본 공격으로 받는 피해량이 5+(최대 체력의 0.35%)까지 감소합니다. 이 수치는 피해량의 40%를 넘을 수 없습니다.</div></div>";

}

function setItem3_22(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/기동력의장화.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3117.png'></div><div id='item_info' style='float:left;'><b><br><br>　기동력의 장화</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　이동 속도 25<br><br>　　　　　　　　5초 동안 전투에서 벗어나 있으면 이동 속도가 115 상승합니다.</div></div>";

}

function setItem3_23(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3157.png' onclick='setItem4_20()' style='cursor:pointer' title='존야의 모래시계'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/추적자의팔목보호대.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3191.png'></div><div id='item_info' style='float:left;'><b><br><br>　추적자의 팔목 보호대</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 20<br>　　　　　　　　방어력 15<br><br>　　　　　　　　마법사의 길: 유닛을 처치하면 방어력이 0.5 (최대 15) 증가합니다.</div></div>";

}

function setItem3_24(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3102.png' onclick='setItem4_17()' style='cursor:pointer' title='벤시의 장막'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/신록의장벽.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4632.png'></div><div id='item_info' style='float:left;'><b><br><br>　신록의 장벽</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 20<br>　　　　　　　　마법 저항력 25<br><br>　　　　　　　　적응: 유닛을 처치하면 마법 저항력이 0.3 (최대 9) 증가합니다.</div></div>";

}

function setItem3_25(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3033.png' onclick='setItem4_10()' style='cursor:pointer' title='필멸자의 운명'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3046.png' onclick='setItem4_15()' style='cursor:pointer' title='유령무희'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3085.png' onclick='setItem4_16()' style='cursor:pointer' title='루난의 허리케인'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3094.png' onclick='setItem4_11()' style='cursor:pointer' title='고속 연사포'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/열정의검.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3086.png'></div><div id='item_info' style='float:left;'><b><br><br>　열정의 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1050</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 18%<br>　　　　　　　　치명타 확률 15%<br><br>　　　　　　　　열광: 이동 속도가 7% 상승합니다.</div></div>";

}

function setItem3_26(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3152.png' onclick='setItem5_14()' style='cursor:pointer' title='마법공학 로켓 벨트'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4628.png' onclick='setItem4_45()' style='cursor:pointer' title='지평선의 초점'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4636.png' onclick='setItem5_16()' style='cursor:pointer' title='밤의 수확자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4645.png' onclick='setItem4_48()' style='cursor:pointer' title='그림자불꽃'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/마법공학교류발전기.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3145.png'></div><div id='item_info' style='float:left;'><b><br><br>　마법공학 교류 발전기</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1050</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 25<br>　　　　　　　　체력 150<br><br>　　　　　　　　자극: 챔피언에게 피해를 입히면 50~125(레벨에 비례)의 마법 피해를 추가로 입힙니다. (재사용 대기시간 40초)</div></div>";

}

function setItem3_27(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/광전사의군화.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3006.png'></div><div id='item_info' style='float:left;'><b><br><br>　광전사의 군화</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 35%<br>　　　　　　　　이동 속도 45</div></div>";

}

function setItem3_28(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/마법사의신발.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3020.png'></div><div id='item_info' style='float:left;'><b><br><br>　마법사의 신발</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　마법 관통력 18<br>　　　　　　　　이동 속도 45</div></div>";

}

function setItem3_29(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6632.png' onclick='setItem5_21()' style='cursor:pointer' title='신성한 파괴자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3053.png' onclick='setItem4_52()' style='cursor:pointer' title='스테락의 도전'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3181.png' onclick='setItem4_30()' style='cursor:pointer' title='선체파괴자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6630.png' onclick='setItem5_19()' style='cursor:pointer' title='선혈포식자'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/탐식의망치.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3044.png'></div><div id='item_info' style='float:left;'><b><br><br>　탐식의 망치</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 15<br>　　　　　　　　체력 200<br><br>　　　　　　　　완강: 챔피언에게 물리 피해를 입히면 6초 동안 최대 체력의 2%만큼 회복합니다.<br><br>　　　　　　　　원거리 챔피언의 경우 회복량이 50%로 감소합니다.</div></div>";

}

function setItem3_30(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/판금장화.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3047.png'></div><div id='item_info' style='float:left;'><b><br><br>　판금 장화</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 20<br>　　　　　　　　이동 속도 45<br><br>　　　　　　　　기본 공격으로 받는 피해량이 12% 감소합니다.</div></div>";

}

function setItem3_31(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3078.png' onclick='setItem5_22()' style='cursor:pointer' title='삼위일체'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6631.png' onclick='setItem5_20()' style='cursor:pointer' title='발걸음 분쇄기'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3091.png' onclick='setItem4_54()' style='cursor:pointer' title='마법사의 최후'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/온기가필요한자의도끼.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3051.png'></div><div id='item_info' style='float:left;'><b><br><br>　온기가 필요한 자의 도끼</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 15<br>　　　　　　　　공격 속도 15%<br><br>　　　　　　　　민첩: 유닛에게 기본 공격을 가하면 2초 동안 이동 속도가 (20 | 원거리 챔피언의 경우 10) 상승합니다.</div></div>";

}

function setItem3_32(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/헤르메스의장화.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3111.png'></div><div id='item_info' style='float:left;'><b><br><br>　헤르메스의 장화</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　마법 저항력 25<br>　　　　　　　　이동 속도 45<br>　　　　　　　　강인함 30%<br><br>　　　　　　　　강인함이 증가해 기절, 둔화, 도발, 공포, 침묵, 실명, 변이 및 이동 불가 효과의 지속시간이 감소합니다. 공중에 뜨거나 <br>　　　　　　　　제압 당했을 때는 효과가 없습니다.</div></div>";

}

function setItem3_33(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3156.png' onclick='setItem4_29()' style='cursor:pointer' title='멜모셔스의 아귀'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6609.png' onclick='setItem4_21()' style='cursor:pointer' title='화공 펑크 사슬검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3142.png' onclick='setItem4_44()' style='cursor:pointer' title='요우무의 유령검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3004.png' onclick='setItem4_32()' style='cursor:pointer' title='마나무네'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6675.png' onclick='setItem4_63()' style='cursor:pointer' title='나보리 신속검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3071.png' onclick='setItem4_53()' style='cursor:pointer' title='칠흑의 양날 도끼'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3074.png' onclick='setItem4_59()' style='cursor:pointer' title='굶주린 히드라'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3508.png' onclick='setItem4_31()' style='cursor:pointer' title='정수 약탈자'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6333.png' onclick='setItem4_55()' style='cursor:pointer' title='죽음의 무도'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6691.png' onclick='setItem5_10()' style='cursor:pointer' title='드락사르의 황혼검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6693.png' onclick='setItem5_12()' style='cursor:pointer' title='자객의 발톱'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6694.png' onclick='setItem4_58()' style='cursor:pointer' title='세릴다의 원한'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6696.png' onclick='setItem4_51()' style='cursor:pointer' title='원칙의 원형낫'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/콜필드의전투망치.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3133.png'></div><div id='item_info' style='float:left;'><b><br><br>　콜필드의 전투망치</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 25<br>　　　　　　　　스킬 가속 10</div></div>";

}

function setItem3_34(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3142.png' onclick='setItem4_44()' style='cursor:pointer' title='요우무의 유령검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3179.png' onclick='setItem4_9()' style='cursor:pointer' title='그림자 검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6695.png' onclick='setItem4_22()' style='cursor:pointer' title='독사의 송곳니'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6692.png' onclick='setItem5_11()' style='cursor:pointer' title='월식'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3814.png' onclick='setItem4_35()' style='cursor:pointer' title='밤의 끝자락'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6691.png' onclick='setItem5_10()' style='cursor:pointer' title='드락사르의 황혼검'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6676.png' onclick='setItem4_50()' style='cursor:pointer' title='징수의 총'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6693.png' onclick='setItem5_12()' style='cursor:pointer' title='자객의 발톱'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6696.png' onclick='setItem4_51()' style='cursor:pointer' title='원칙의 원형낫'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/톱날단검.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3134.png'></div><div id='item_info' style='float:left;'><b><br><br>　톱날 단검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 30<br><br>　　　　　　　　도려내기: 물리 관통력이 10 증가합니다.</div></div>";

}

function setItem3_35(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/감시하는와드석.png' width='591px' height='178px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4638.png'></div><div id='item_info' style='float:left;'><b><br><br>　감시하는 와드석</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 150<br>　　　　　　　　스킬 가속 10<br><br>　　　　　　　　신비로운 상자: 이 아이템은 구매한 제어 와드를 3개까지 저장할 수 있습니다.<br><br>　　　　　　　　지원 퀘스트를 완수하고 13레벨에 도달하면 경계의 와드석으로 변합니다.</div></div>";

}

function setItem3_36(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6630.png' onclick='setItem5_19()' style='cursor:pointer' title='선혈포식자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6631.png' onclick='setItem5_20()' style='cursor:pointer' title='발걸음 분쇄기'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/강철가시채찍.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6029.png'></div><div id='item_info' style='float:left;'><b><br><br>　강철가시 채찍</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 30<br><br>　　　　　　　　사용 시 - 초승달: 주변 적들에게 기본 공격력의100%에 해당하는 물리 피해를 입힙니다. <br>　　　　　　　　(재사용 대기시간 20초, 스킬 가속에 따라 감소)</div></div>";

}

function setItem3_37(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3068.png' onclick='setItem5_13()' style='cursor:pointer' title='태양불꽃 방패'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6662.png' onclick='setItem5_8()' style='cursor:pointer' title='서리불꽃 건틀릿'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6664.png' onclick='setItem5_9()' style='cursor:pointer' title='터보 화공 탱크'>　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/바미의불씨.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6660.png'></div><div id='item_info' style='float:left;'><b><br><br>　바미의 불씨</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 300<br><br>　　　　　　　　불사르기: 피해를 받거나 입히면 주변 적들에게 3초 동안 초당 15+추가 체력의 1%에 해당하는 마법 피해를 입힙니다. <br>　　　　　　　　(미니언 대상 25%, 몬스터 대상 25% 증가)</div></div>";

}

function setItem3_38(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3074.png' onclick='setItem4_59()' style='cursor:pointer' title='굶주린 히드라'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3748.png' onclick='setItem4_60()' style='cursor:pointer' title='거대한 히드라'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/티아맷.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3077.png'></div><div id='item_info' style='float:left;'><b><br><br>　티아맷</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 25<br><br>　　　　　　　　쪼개기: 기본 공격 시 주변 적들에게 최대 공격력의 60%에 해당하는 물리 피해를 입힙니다.<br><br>　　　　　　　　최대 거리에 있는 적에게는 공격력의 12%에 해당하는 피해만 입힙니다.<br>　　　　　　　　구조물에는 쪼개기가 발동되지 않습니다.</div></div>";

}

function setItem3_39(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3065.png' onclick='setItem4_33()' style='cursor:pointer' title='정령의 형상'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/8020.png' onclick='setItem4_26()' style='cursor:pointer' title='심연의 가면'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/망령의두건.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3211.png'></div><div id='item_info' style='float:left;'><b><br><br>　망령의 두건</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1250</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 250<br>　　　　　　　　마법 저항력 25<br><br>　　　　　　　　무형: 챔피언에게 피해를 입으면 최대 10초 동안 기본 체력 재생이 150% 증가합니다. (지속시간은 입은 피해량에 비례)</div></div>";

}

function setItem3_40(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3135.png' onclick='setItem4_28()' style='cursor:pointer' title='공허의 지팡이'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/역병의보석.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4630.png'></div><div id='item_info' style='float:left;'><b><br><br>　역병의 보석</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1250</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 25<br>　　　　　　　　마법 관통력 15%</div></div>";

}

function setItem3_41(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6035.png' onclick='setItem4_49()' style='cursor:pointer' title='은빛 여명'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3139.png' onclick='setItem4_43()' style='cursor:pointer' title='헤르메스의 시미터'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/수은장식띠.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3140.png'></div><div id='item_info' style='float:left;'><b><br><br>　수은 장식띠</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　마법 저항력 30<br><br>　　　　　　　　사용 시 - 수은: 모든 군중 제어 효과(공중에 뜸 제외)가 제거됩니다. (재사용 대기시간 90초)</div></div>";

}

function setItem3_42(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3156.png' onclick='setItem4_29()' style='cursor:pointer' title='멜모셔스의 아귀'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/주문포식자.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3155.png'></div><div id='item_info' style='float:left;'><b><br><br>　주문포식자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 20<br>　　　　　　　　마법 저항력 35<br><br>　　　　　　　　생명선: 마법 피해를 받아 체력이 30% 이하가 될 경우 3초 동안 110~280(레벨에 비례)의 마법 피해를 흡수하는 보호막을 <br>　　　　　　　　얻습니다. (재사용 대기시간 90초)</div></div>";

}

function setItem3_43(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6653.png' onclick='setItem5_18()' style='cursor:pointer' title='리안드리의 고뇌'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6655.png' onclick='setItem5_18()' style='cursor:pointer' title='루덴의 메아리'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4644.png' onclick='setItem5_6()' style='cursor:pointer' title='부서진 여왕의 왕관'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6656.png' onclick='setItem5_7()' style='cursor:pointer' title='만년서리'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/사라진양피지.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3802.png'></div><div id='item_info' style='float:left;'><b><br><br>　사라진 양피지</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 40<br>　　　　　　　　마나 300<br>　　　　　　　　스킬 가속 10<br><br>　　　　　　　　깨우치기: 레벨 업하면 3초 동안 최대 마나의 20%를 회복합니다.</div></div>";

}

function setItem3_44(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4633.png' onclick='setItem5_15()' style='cursor:pointer' title='균열 생성기'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/흡수의시선.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4635.png'></div><div id='item_info' style='float:left;'><b><br><br>　흡수의 시선</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 20<br>　　　　　　　　체력 250<br>　　　　　　　　모든 피해 흡혈 5%</div></div>";

}

function setItem3_45(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6671.png' onclick='setItem5_23()' style='cursor:pointer' title='돌풍'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6672.png' onclick='setItem5_24()' style='cursor:pointer' title='크라켄 학살자'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6673.png' onclick='setItem5_25()' style='cursor:pointer' title='불멸의 철갑궁'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/절정의화살.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6670.png'></div><div id='item_info' style='float:left;'><b><br><br>　절정의 화살</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 30<br>　　　　　　　　공격 속도 15%<br><br>　　　　　　　　정밀: 미니언과 몬스터에게 기본 공격 시 20의 물리 피해를 추가로 입힙니다.</div></div>";

}

function setItem3_46(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3190.png' onclick='setItem5_3()' style='cursor:pointer' title='강철의 솔라리 펜던트'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3193.png' onclick='setItem4_57()' style='cursor:pointer' title='가고일의 돌갑옷'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3001.png' onclick='setItem5_2()' style='cursor:pointer' title='저녁갑주'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3068.png' onclick='setItem5_13()' style='cursor:pointer' title='태양불꽃 방패'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/군단의방패.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3105.png'></div><div id='item_info' style='float:left;'><b><br><br>　군단의 방패</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 30<br>　　　　　　　　마법 저항력 30<br>　　　　　　　　스킬 가속 10</div></div>";

}

function setItem3_47(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3036.png' onclick='setItem4_38()' style='cursor:pointer' title='도미닉경의 인사'>　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6694.png' onclick='setItem4_58()' style='cursor:pointer' title='세릴다의 원한'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/최후의속삭임.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3035.png'></div><div id='item_info' style='float:left;'><b><br><br>　최후의 속삭임</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1450</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 20<br>　　　　　　　　방어구 관통력 20%</div></div>";

}

//전설급 64개


function setItem4_1(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/메자이의영혼약탈자.png' width='483px' height='245px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3041.png'></div><div id='item_info' style='float:left;'><b><br><br>　메자이의 영혼약탈자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 1600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 20<br>　　　　　　　　체력 100<br><br>　　　　　　　　영광: 적 챔피언을 처치할 때마다 중첩 4회, 어시스트를 올릴 때마다 중첩 2회가 쌓입니다. 최대 25회까지 쌓을 수 있으며 <br>　　　　　　　　사망 시 중첩 10회가 사라집니다.<br>　　　　　　　　두려움: 영광 중첩 하나당 주문력을 5 얻습니다. 10중첩 이상일 때 이동 속도가 10% 상승합니다.<br><br>　　　　　　　　획득한 영광 중첩은 이 아이템과 암흑의 인장에 모두 적용됩니다.</div></div>";

}

function setItem4_2(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/화학공학부패기.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3011.png'></div><div id='item_info' style='float:left;'><b><br><br>　화학공학 부패기</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 55<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　버섯 독소: 챔피언에게 마법 피해를 입히면 3초 동안 40%의 고통스러운 상처를 남깁니다. 다른 아군을 치유하거나 보호막을<br>　　　　　　　　씌워주면 자신과 대상 아군 모두 강화되어 다음번 적 챔피언에게 피해를 입힐 때 60%의 고통스러운 상처를 남깁니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem4_3(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/구원.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3107.png'></div><div id='item_info' style='float:left;'><b><br><br>　구원</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 회복 및 보호막 20%<br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 15<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　사용 시 - 중재: 5500 거리 안의 위치를 지정합니다. 2.5초 후 빛을 한 줄기 불러와 아군의 체력을 200~400(아군 레벨에 비례)<br>　　　　　　　　만큼 회복시키고 적 챔피언에게 최대 체력의 10%에 해당하는 고정 피해를 입힙니다. (재사용 대기시간 90초)<br><br>　　　　　　　　죽은 상태로도 사용할 수 있습니다. 대상이 최근 다른 챔피언의 중재 효과를 받은 경우 효과가 50% 감소합니다. 레벨 비례 <br>　　　　　　　　효과는 아군의 레벨에 따라 상승합니다.</div></div>";

}

function setItem4_4(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/기사의맹세.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3109.png'></div><div id='item_info' style='float:left;'><b><br><br>　기사의 맹세</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 400<br>　　　　　　　　스킬 가속 10<br>　　　　　　　　기본 체력 재생 150%<br><br>　　　　　　　　사용 시 - 맹세: 보호할 아군을 대상으로 지정합니다. (재사용 대기시간 60초)<br><br>　　　　　　　　희생: 보호 중인 아군이 근처에 있으면 아군이 입는 피해량의 10%를 대신 입고 보호 중인 아군이 챔피언에게 가하는 피해량의<br>　　　　　　　　 8%만큼 체력을 회복합니다. 해당 아군의 체력이 30% 아래라면 피해량 감소 효과가 20%로 증가합니다.<br><br>　　　　　　　　한 번에 한 명의 챔피언만 기사의 맹세로 연결될 수 있습니다. 자신의 체력이 30% 아래로 떨어지면 피해를 대신 입지 <br>　　　　　　　　않습니다.</div></div>";

}

function setItem4_5(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/미카엘의축복.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3222.png'></div><div id='item_info' style='float:left;'><b><br><br>　미카엘의 축복</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 회복 및 보호막 20%<br>　　　　　　　　마법 저항력 50<br>　　　　　　　　스킬 가속 15<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　사용 시 - 정화: 아군 챔피언에게 걸린 모든 군중 제어 효과(공중에 뜸 및 제압 제외)를 제거하고 체력을 100~200 <br>　　　　　　　　(아군 레벨에 비례) 회복합니다. (재사용 대기시간 120초)</div></div>";

}

function setItem4_6(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/불타는향로.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3504.png'></div><div id='item_info' style='float:left;'><b><br><br>　불타는 향로</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 60<br>　　　　　　　　체력 회복 및 보호막 10%<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　축성: 다른 아군을 치유하거나 보호막을 씌워주면 6초 동안 자신과 대상 아군의 공격 속도가 10%~30% (아군 레벨에 비례) <br>　　　　　　　　상승하고 공격 시 5~20(아군 레벨에 비례)의 마법 피해(적중 시 )를 입힙니다.<br><br>　　　　　　　　레벨 비례 효과는 아군의 레벨에 따라 상승합니다.</div></div>";

}

function setItem4_7(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/흐르는물의지팡이.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6616.png'></div><div id='item_info' style='float:left;'><b><br><br>　흐르는 물의 지팡이</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 50<br>　　　　　　　　체력 회복 및 보호막 10%<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　급류: 다른 아군의 체력을 회복시키거나 보호막을 씌우면 4초 동안 자신과 대상의 주문력이 25~45, 스킬 가속이 20 <br>　　　　　　　　증가합니다.<br><br>　　　　　　　　레벨 비례 효과는 아군의 레벨에 따라 상승합니다.</div></div>";

}

function setItem4_8(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/지크의융합.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3050.png'></div><div id='item_info' style='float:left;'><b><br><br>　지크의 융합</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 250<br>　　　　　　　　방어력 25<br>　　　　　　　　마나 250<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　사용 시 - 전도체: 한 명을 동료로 지정합니다. (재사용 대기시간 60초)<br><br>　　　　　　　　융합: 적을 이동 불가 상태로 만들면 8초 동안 동료의 기본 공격과 스킬이 해당 적에게 30~70(레벨에 비례)의 마법 피해를 추가로 <br>　　　　　　　　입힙니다.<br><br>　　　　　　　　지크의 융합 결속은 한 번에 하나만 가능합니다.</div></div>";

}

function setItem4_9(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/그림자검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3179.png'></div><div id='item_info' style='float:left;'><b><br><br>　그림자 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 50<br>　　　　　　　　물리 관통력 10<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　암전: 적 와드에 발각되면 8초간 암전을 일으켜 근처의 투명한 덫과 와드를 드러내고, 추가로 와드를 무력화시킵니다. (재사용<br>　　　　　　　　대기시간 45초) 모습이 드러난 덫은 기본 공격 시 즉시 파괴되며 와드는 세 배의 피해를 입습니다.</div></div>";

}

function setItem4_10(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/필멸자의운명.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3033.png'></div><div id='item_info' style='float:left;'><b><br><br>　필멸자의 운명</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 25<br>　　　　　　　　공격 속도 25%<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　이동 속도 7%<br><br>　　　　　　　　패혈증: 적 챔피언에게 물리 피해를 입히면 3초 동안 40%의 고통스러운 상처를 남깁니다. 적 챔피언에게 기본 공격을 <br>　　　　　　　　연속으로 3회 가하면 지속시간 동안 대상 챔피언이 받는 고통스러운 상처 효과가 60%로 증가합니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem4_11(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/고속연사포.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3094.png'></div><div id='item_info' style='float:left;'><b><br><br>　고속 연사포</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 35%<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　이동 속도 7%<br><br>　　　　　　　　충전 상태: 이동하거나 공격하면 충전 상태로 공격할 수 있습니다.<br>　　　　　　　　저격수: 충전 상태로 공격 시 120의 추가 마법 피해를 입히며 사거리가 35% 증가합니다.<br><br>　　　　　　　　사거리는 최대 150까지만 증가할 수 있습니다.</div></div>";

}

function setItem4_12(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/얼어붙은심장.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3110.png'></div><div id='item_info' style='float:left;'><b><br><br>　얼어붙은 심장</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 80<br>　　　　　　　　마나 400<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　혹한의 포옹: 주변 적의 공격 속도를 20%만큼 감소시킵니다.<br>　　　　　　　　견고: 기본 공격으로 받는 피해량이 7+최대 체력 1,000당 3.5까지 감소합니다. 이 수치는 피해량의 40%를 넘을 수 없습니다.</div></div>";

}

function setItem4_13(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/모렐로노미콘.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3165.png'></div><div id='item_info' style='float:left;'><b><br><br>　모렐로노미콘</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 80<br>　　　　　　　　체력 250<br><br>　　　　　　　　괴로움: 적 챔피언에게 마법 피해를 입히면 3초 동안 40%의 고통스러운 상처 를 남깁니다. 대상의 체력이 50% 이하라면 <br>　　　　　　　　고통스러운 상처의 효과가 60%로 증가합니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem4_14(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/증오의사슬.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/8001.png'></div><div id='item_info' style='float:left;'><b><br><br>　증오의 사슬</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 650<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　사용 시 - 맹세: 피의 복수를 할 숙적을 선택합니다. (90초)<br><br>　　　　　　　　피의 복수: 숙적으로부터 받는 피해량이 30%까지 감소합니다. (피의 복수 중첩당 1%) 시간이 지남에 따라 중첩을 얻으며, <br>　　　　　　　　60초 후에 최대 중첩에 도달합니다.<br>　　　　　　　　복수: 최대 중첩 시 근처에 있는 숙적의 강인함이 20% 감소합니다.<br><br>　　　　　　　　죽은 상태에서도 전장 전체에 사용할 수 있습니다. 새로운 대상을 지정하면 중첩이 초기화됩니다. 챔피언과 전투 중일 때는 <br>　　　　　　　　15초 동안 사용할 수 없습니다.<br><br>　　　　　　　　''그녀는 그자를 파멸시키는 데 자신의 삶을 바치겠다고 맹세했다. 건틀릿이 그 증인이지.''</div></div>";
}

function setItem4_15(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/유령무희.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3046.png'></div><div id='item_info' style='float:left;'><b><br><br>　유령무희</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 20<br>　　　　　　　　공격 속도 25%<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　이동 속도 7%<br><br>　　　　　　　　망령의 왈츠: 기본 공격을 가하면 유체화 상태가 되어 3초 동안 이동 속도가 7% 상승합니다. 또한 기본 공격을 4회 가하면 <br>　　　　　　　　망령의 왈츠 효과가 공격 속도를 30% 상승시킵니다.<br><br>　　　　　　　　유체화 상태인 유닛은 다른 유닛과 충돌하지 않습니다.</div></div>";

}

function setItem4_16(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/루난의허리케인.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3085.png'></div><div id='item_info' style='float:left;'><b><br><br>　루난의 허리케인</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 45%<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　이동 속도 7%<br><br>　　　　　　　　바람의 분노: 기본 공격 시 대상 주변 최대 2명의 적에게 작은 탄환을 발사하여, 각각 공격력의 40%에 해당하는 물리 피해를 <br>　　　　　　　　입힙니다. 이 탄환에는 치명타 및 적중 시 효과가 적용됩니다.<br><br>　　　　　　　　원거리 챔피언 전용 아이템입니다.</div></div>";

}

function setItem4_17(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/벤시의장막.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3102.png'></div><div id='item_info' style='float:left;'><b><br><br>　벤시의 장막</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 80<br>　　　　　　　　마법 저항력 45<br>　　　　　　　　스킬 가속 10<br><br>　　　　　　　　무효화: 적의 다음 스킬을 막아 주는 주문 방어막을 생성합니다. (재사용 대기시간 40초)<br><br>　　　　　　　　효과가 다시 활성화되기 전에 챔피언으로부터 피해를 입으면 재사용 대기시간이 초기화됩니다.</div></div>";

}

function setItem4_18(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/혹한의손길.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3119.png'></div><div id='item_info' style='float:left;'><b><br><br>　혹한의 손길</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 400<br>　　　　　　　　마나 500<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　경탄: 총 마나의 8%만큼 체력을 추가로 얻습니다.<br>　　　　　　　　마나 충전: 대상에게 스킬 또는 기본 공격을 적중시키면 중첩을 하나 소모해 3의 추가 마나를 얻습니다. 챔피언 대상으로는 <br>　　　　　　　　두 배로 적용됩니다. 추가 마나가 최대치인 360에 도달하면 종말의 겨울로 변합니다.<br><br>　　　　　　　　8초마다 새로운 마나 충전 중첩을 얻습니다. (최대 4)</div></div>";

}

function setItem4_19(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/구인수의격노검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3124.png'></div><div id='item_info' style='float:left;'><b><br><br>　구인수의 격노검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격 속도 45%<br>　　　　　　　　치명타 확률 20%<br><br>　　　　　　　　분노: 치명타 확률이 적중 시 의 피해량으로 전환됩니다. 치명타 확률 20%당 40의 피해(적중 시 )를 입힙니다.<br>　　　　　　　　들끓는 일격: 세 번째 기본 공격을 가할 때마다 적중 시 효과가 두 번 적용됩니다.<br><br>　　　　　　　　치명타 확률이 100%가 되면 분노 효과가 최대가 됩니다. 분노의 적중 시 피해량은 치명타 피해량 관련 능력치에 따라 <br>　　　　　　　　증가합니다.</div></div>";

}

function setItem4_20(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/존야의모래시계.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3157.png'></div><div id='item_info' style='float:left;'><b><br><br>　존야의 모래시계</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 65<br>　　　　　　　　방어력 45<br>　　　　　　　　스킬 가속 10<br><br>　　　　　　　　사용 시 - 경직: 2.5초 동안 무적 및 대상으로 지정할 수 없는 상태가 되지만, 그동안 아무런 행동도 할 수 없습니다. <br>　　　　　　　　(재사용 대기시간 120초)</div></div>";

}

function setItem4_21(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/화공펑크사슬검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6609.png'></div><div id='item_info' style='float:left;'><b><br><br>　화공 펑크 사슬검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 45<br>　　　　　　　　체력 250<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　광란의 뿔: 적 챔피언에게 물리 피해를 입히면 3초 동안 40%의 고통스러운 상처를 남깁니다. 대상의 체력이 50% 이하라면 <br>　　　　　　　　고통스러운 상처의 효과가 60%로 증가합니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem4_22(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/독사의송곳니.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6695.png'></div><div id='item_info' style='float:left;'><b><br><br>　독사의 송곳니</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　물리 관통력 12<br><br>　　　　　　　　보호막 파괴자: 적 챔피언에게 피해를 입히면 3초 동안 받는 보호막의 효과를 감소시킵니다. (근접 챔피언의 경우 50% | <br>　　　　　　　　원거리 챔피언의 경우 35%) 보호막 파괴자에 영향을 받지 않은 적에게 피해를 입히면 보호막을 감소시킵니다. (근접 챔피언의<br>　　　　　　　　경우 50% | 원거리 챔피언의 경우 35%)<br><br>　　　　　　　　마법 피해만 막는 보호막을 가진 대상에게는 추가 피해가 적용되지 않습니다.<br>　　　　　　　　아이템 성능은 근접 챔피언과 원거리 챔피언에게 각각 다르게 적용됩니다.</div></div>";

}

function setItem4_23(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/가시갑옷.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3075.png'></div><div id='item_info' style='float:left;'><b><br><br>　가시 갑옷</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 350<br>　　　　　　　　방어력 60<br><br>　　　　　　　　가시: 기본 공격에 맞으면 공격한 적에게 10+추가 방어력의 10%에 해당하는 마법 피해를 입히고, 대상이 챔피언일 경우 3초<br>　　　　　　　　동안 40%의 고통스러운 상처를 남깁니다. 적 챔피언을 이동 불가 상태로 만들면 3초 동안 60%의 고통스러운 상처를 <br>　　　　　　　　남깁니다.<br><br>　　　　　　　　고통스러운 상처는 치유 및 회복 효과를 감소시킵니다.</div></div>";

}

function setItem4_24(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/폭풍갈퀴.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3095.png'></div><div id='item_info' style='float:left;'><b><br><br>　폭풍갈퀴</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2700</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40<br>　　　　　　　　공격 속도 15%<br>　　　　　　　　치명타 확률 20%<br><br>　　　　　　　　충전 상태: 이동하거나 공격하면 충전 상태로 공격할 수 있습니다.<br>　　　　　　　　마비: 충전 상태로 공격 시 120의 추가 마법 피해를 입힙니다. 충전 효과로 0.5초 동안 적을 75% 둔화시킵니다.</div></div>";

}

function setItem4_25(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/란두인의예언.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3143.png'></div><div id='item_info' style='float:left;'><b><br><br>　란두인의 예언</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2700</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 250<br>　　　　　　　　방어력 80<br>　　　　　　　　스킬 가속 10<br><br>　　　　　　　　사용 시 - 억제: 근처 적들을 잠깐 둔화하고 4초 동안 공격력을 10%, 치명타 피해량을 20% 감소시킵니다. <br>　　　　　　　　(재사용 대기시간 60초)<br><br>　　　　　　　　견고: 기본 공격으로 받는 피해량이 5+(최대 체력의 0.35%)까지 감소합니다. 이 수치는 피해량의 40%를 넘을 수 없습니다.</div></div>";

}

function setItem4_26(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/심연의가면.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/8020.png'></div><div id='item_info' style='float:left;'><b><br><br>　심연의 가면</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2700</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 450<br>　　　　　　　　마법 저항력 30<br>　　　　　　　　스킬 가속 10<br><br>　　　　　　　　파괴: 주변 적 챔피언들에게 저주를 내려 마법 저항력을 5+추가 체력의 1% (최대 20) 감소시킵니다. 저주를 내린 적 하나당 <br>　　　　　　　　7의 마법 저항력을 얻습니다.</div></div>";

}

function setItem4_27(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/수호천사.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3026.png'></div><div id='item_info' style='float:left;'><b><br><br>　수호 천사</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2700</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40<br>　　　　　　　　방어력 40<br><br>　　　　　　　　구원의 은총: 치명적인 피해를 입으면 4초 동안 경직에 걸린 다음 기본 체력의 50%, 최대 마나의 30%를 회복합니다. <br>　　　　　　　　(재사용 대기시간 300초)</div></div>";

}

function setItem4_28(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/공허의지팡이.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3135.png'></div><div id='item_info' style='float:left;'><b><br><br>　공허의 지팡이</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 65<br>　　　　　　　　마법 관통력 45%</div></div>";

}

function setItem4_29(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/멜모셔스의아귀.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3156.png'></div><div id='item_info' style='float:left;'><b><br><br>　멜모셔스의 아귀</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 50<br>　　　　　　　　마법 저항력 50<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　생명선: 마법 피해를 받아 체력이 30% 이하가 될 경우 5초 동안 200+최대 체력의 20%에 해당하는 마법 피해를 흡수하는 <br>　　　　　　　　보호막을 얻습니다. (재사용 대기시간 60초)</div></div>";

}

function setItem4_30(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/선체파괴자.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3181.png'></div><div id='item_info' style='float:left;'><b><br><br>　선체파괴자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 50<br>　　　　　　　　체력 400<br>　　　　　　　　기본 체력 재생 150%<br><br>　　　　　　　　승선 부대: 근처에 아군 챔피언이 없으면 방어력과 마법 저항력을 20~45 획득하고 포탑에 입히는 피해가 20% 증가합니다. <br>　　　　　　　　주변에 있는 대형 미니언은 방어력과 마법 저항력을 60~135 획득하고 포탑에 입히는 피해가 200% 증가합니다.<br><br>　　　　　　　　아군 챔피언이 너무 가까이 오면 승선 부대 효과로 얻은 방어력과 마법 저항력이 3초에 걸쳐 사라집니다.</div></div>";

}

function setItem4_31(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/정수약탈자.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3508.png'></div><div id='item_info' style='float:left;'><b><br><br>　정수 약탈자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 45<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　주문 검: 스킬을 사용하고 나면 다음 기본 공격 시 기본 공격력의 100%+추가 공격력의 40%에 해당하는 물리 피해(적중 시 )를<br>　　　　　　　　추가로 입히고 추가 피해량의 40%만큼 마나를 회복합니다. (재사용 대기시간 1.5초)</div></div>";

}

function setItem4_32(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/마나무네.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3004.png'></div><div id='item_info' style='float:left;'><b><br><br>　마나무네</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 35<br>　　　　　　　　마나 500<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　경탄: 공격력을 최대 마나의 2.5%만큼 추가로 얻습니다.<br>　　　　　　　　마나 충전: 대상에게 스킬 또는 기본 공격을 적중시키면 중첩을 하나 소모해 3의 추가 마나를 얻습니다. 챔피언 대상으로는 <br>　　　　　　　　두 배로 적용됩니다. 추가 마나가 최대치인 360에 도달하면 무라마나로 변합니다.<br><br>　　　　　　　　8초마다 새로운 마나 충전 중첩을 얻습니다. (최대 4)</div></div>";

}

function setItem4_33(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/정령의형상.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3065.png'></div><div id='item_info' style='float:left;'><b><br><br>　정령의 형상</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 450<br>　　　　　　　　마법 저항력 40<br>　　　　　　　　스킬 가속 10<br>　　　　　　　　기본 체력 재생 100%<br><br>　　　　　　　　무한한 활력: 자신이 받는 모든 체력 회복 및 보호막 효과가 25% 증가합니다.</div></div>";

}

function setItem4_34(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/망자의갑옷.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3742.png'></div><div id='item_info' style='float:left;'><b><br><br>　망자의 갑옷</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 300<br>　　　　　　　　방어력 45<br>　　　　　　　　이동 속도 5%<br><br>　　　　　　　　침몰시키는 자: 이동 시 최대 40의 추가 이동 속도를 얻습니다. 다음 기본 공격 시 최대 40(+기본 공격력의 100%)의 물리 <br>　　　　　　　　피해를 입히고 추가 이동 속도를 잃습니다. 착용자가 근접 챔피언일 경우 최고 속도에서 기본 공격 시 1초 동안 대상을 50% <br>　　　　　　　　둔화 시킵니다.<br><br>　　　　　　　　''내 갑옷을 뺏을 방도는 하나뿐이다...'' - 무명씨</div></div>";

}

function setItem4_35(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/밤의끝자락.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3814.png'></div><div id='item_info' style='float:left;'><b><br><br>　밤의 끝자락</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 50<br>　　　　　　　　물리 관통력 10<br>　　　　　　　　체력 325<br><br>　　　　　　　　무효화: 적의 다음 스킬을 막아 주는 주문 방어막을 생성합니다. (재사용 대기시간 40초)<br><br>　　　　　　　　효과가 다시 활성화되기 전에 피해를 입으면 재사용 대기시간이 초기화됩니다.</div></div>";

}

function setItem4_36(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/대자연의힘.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4401.png'></div><div id='item_info' style='float:left;'><b><br><br>　대자연의 힘</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 350<br>　　　　　　　　마법 저항력 70<br>　　　　　　　　이동 속도 5%<br><br>　　　　　　　　흡입: 적 챔피언에게 마법 피해를 입으면 5초 동안 굳건함 중첩을 1회 얻습니다. (최대 6중첩) 적의 이동 불가 효과를 받으면 <br>　　　　　　　　추가로 중첩을 2회 얻습니다.<br>　　　　　　　　분산: 굳건함이 6회 중첩되면 20% 감소된 마법 피해를 받고 이동 속도가 10% 상승합니다.<br><br>　　　　　　　　같은 스킬로는 굳건함 중첩을 1초에 1회만 얻을 수 있습니다.</div></div>";

}

function setItem4_37(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/대천사의지팡이.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3003.png'></div><div id='item_info' style='float:left;'><b><br><br>　대천사의 지팡이</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2900</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 60<br>　　　　　　　　마나 500<br>　　　　　　　　체력 200<br><br>　　　　　　　　경탄: 추가 마나의 0.5%만큼 스킬 가속을 얻습니다.<br>　　　　　　　　마나 충전: 대상에게 스킬을 적중시키면 중첩을 하나 소모해 3의 추가 마나를 얻습니다. 챔피언 대상으로는 두 배로 <br>　　　　　　　　적용됩니다. 추가 마나가 최대치인 360에 도달하면 대천사의 포옹으로 변합니다.<br><br>　　　　　　　　8초마다 새로운 마나 충전 중첩을 얻습니다. (최대 4)</div></div>";

}

function setItem4_38(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/도미닉경의인사.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3036.png'></div><div id='item_info' style='float:left;'><b><br><br>　도미닉경의 인사</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 30<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　방어구 관통력 35%<br><br>　　　　　　　　거인 학살자: 자신보다 최대 체력이 높은 적 챔피언에게 최대 15%의 추가 물리 피해를 입힙니다.<br><br>　　　　　　　　체력 차이가 2000 이상일 때 추가 피해량이 최대가 됩니다.</div></div>";

}

function setItem4_39(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/워모그의갑옷.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3083.png'></div><div id='item_info' style='float:left;'><b><br><br>　워모그의 갑옷</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 800<br>　　　　　　　　스킬 가속 10<br>　　　　　　　　기본 체력 재생 200%<br><br>　　　　　　　　워모그의 심장: 추가 체력이 1100 이상일 때, 6초 동안 피해를 입지 않으면 초당 최대 체력의 5%만큼 회복합니다. <br>　　　　　　　　(챔피언이 아닌 대상에게는 3초)</div></div>";

}

function setItem4_40(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/리치베인.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3100.png'></div><div id='item_info' style='float:left;'><b><br><br>　리치베인</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 75<br>　　　　　　　　이동 속도 8%<br><br>　　　　　　　　주문 검: 스킬을 사용하고 나면 다음 기본 공격 시 기본 공격력의 150%+주문력의 40%에 해당하는 마법 피해(적중 시 )를 <br>　　　　　　　　추가로 입힙니다. (재사용 대기시간 2.5초)</div></div>";

}

function setItem4_41(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/내셔의이빨.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3115.png'></div><div id='item_info' style='float:left;'><b><br><br>　내셔의 이빨</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 100<br>　　　　　　　　공격 속도 50%<br><br>　　　　　　　　이케시아의 이빨: 기본 공격 시 (15+주문력의 20%에 해당하는 마법 피해(적중 시 )를 입힙니다.</div></div>";

}

function setItem4_42(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/라일라이의수정홀.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3116.png'></div><div id='item_info' style='float:left;'><b><br><br>　라일라이의 수정홀</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 90<br>　　　　　　　　체력 350<br><br>　　　　　　　　서리: 스킬로 적에게 피해를 입히면 1초 동안 30% 둔화시킵니다.</div></div>";

}

function setItem4_43(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/헤르메스의시미터.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3139.png'></div><div id='item_info' style='float:left;'><b><br><br>　헤르메스의 시미터</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　마법 저항력 30<br><br>　　　　　　　　사용 시 - 수은: 챔피언에 걸린 모든 군중 제어 효과(공중에 뜸 제외)를 제거하고, 1초 동안 이동 속도가 50% 상승합니다. <br>　　　　　　　　(재사용 대기시간 90초)</div></div>";

}

function setItem4_44(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/요우무의유령검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3142.png></div><div id='item_info' style='float:left;'><b><br><br>　요우무의 유령검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　물리 관통력 18<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　사용 시 - 망령의 발걸음: 6초 동안 이동 속도가 20% 상승하고 유체화 상태가 됩니다. (재사용 대기시간 45초)<br><br>　　　　　　　　출몰: 전투에서 벗어나 있을 때 이동 속도가 40 상승합니다.<br><br>　　　　　　　　유체화 상태인 유닛은 다른 유닛과 충돌하지 않습니다.</div></div>";

}

function setItem4_45(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/지평선의초점.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4628.png'></div><div id='item_info' style='float:left;'><b><br><br>　지평선의 초점</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 85<br>　　　　　　　　체력 150<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　초강력 사격: 700 거리보다 멀리에서 지정하지 않는 스킬로 챔피언에게 피해를 입히거나 둔화 또는 이동 불가 상태로 만들면 <br>　　　　　　　　대상의 위치를 드러내고 6초 동안 자신이 입히는 피해를 10% 증가시킵니다.<br><br>　　　　　　　　초강력 사격을 발동하는 스킬 역시 피해량이 증가합니다. 소환물이나 이동 불가 효과가 없는 덫은 이 효과를 발동시키지 <br>　　　　　　　　않습니다. 범위 지정 스킬은 처음에만 이 효과를 발동시키고, 거리는 사용 시 위치 기준으로 계산됩니다.</div></div>";

}

function setItem4_46(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/우주의추진력.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4629.png'></div><div id='item_info' style='float:left;'><b><br><br>　우주의 추진력</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 75<br>　　　　　　　　체력 250<br>　　　　　　　　스킬 가속 30<br>　　　　　　　　이동 속도 5%<br><br>　　　　　　　　마법의 춤: 한 챔피언에게 별개의 기본 공격이나 스킬로 3회 공격하면 적 챔피언과의 전투에서 벗어날 때까지 이동 속도가 <br>　　　　　　　　20%(상승 효과는 10%로 점차 감소), 주문력이 40 증가합니다.</div></div>";

}

function setItem4_47(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/악마의포옹.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4637.png'></div><div id='item_info' style='float:left;'><b><br><br>　악마의 포옹</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 60<br>　　　　　　　　체력 450<br><br>　　　　　　　　아자카나의 응시: 스킬 피해를 입히면 4초 동안 적을 불태워 매초 2/1.2% (근접/원거리)의 최대 체력에 비례한 마법 피해를 <br>　　　　　　　　입힙니다.<br>　　　　　　　　어둠의 계약: 추가 체력의 2%만큼 주문력을 얻습니다.</div></div>";

}

function setItem4_48(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/그림자불꽃.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4645.png'></div><div id='item_info' style='float:left;'><b><br><br>　그림자불꽃</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 100<br>　　　　　　　　체력 200<br><br>　　　　　　　　잿덩이꽃: 챔피언에게 입히는 피해에 10~20 의 추가 마법 관통력이 적용됩니다. 이 수치는 대상의 현재 체력이 낮을수록 <br>　　　　　　　　증가하며 대상의 체력이 1000 이하일 때 최대가 됩니다. 최근 보호막을 받은 대상에게 효과가 최대로 적용됩니다. <br>　　　　　　　　(추가 마법 관통력 20 )</div></div>";

}

function setItem4_49(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/은빛여명.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6035.png'></div><div id='item_info' style='float:left;'><b><br><br>　은빛 여명</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40<br>　　　　　　　　체력 300<br>　　　　　　　　마법 저항력 35<br><br>　　　　　　　　사용 시 - 수은: 챔피언에 걸린 모든 군중 제어 효과(공중에 뜸 제외)를 제거하고, 3초 동안 강인함이 40%, 둔화 저항이 40% <br>　　　　　　　　증가합니다. (재사용 대기시간 90초)</div></div>";

}

function setItem4_50(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/징수의총.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6676.png'></div><div id='item_info' style='float:left;'><b><br><br>　징수의 총</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　물리 관통력 12<br><br>　　　　　　　　죽음과 세금: 적 챔피언에게 피해를 입혀 체력이 5% 이하가 되면 처형합니다. 챔피언 처치 시 추가로 25골드를 얻습니다.</div></div>";

}

function setItem4_51(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/원칙의원형낫.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6696.png'></div><div id='item_info' style='float:left;'><b><br><br>　원칙의 원형낫</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　물리 관통력 10<br>　　　　　　　　스킬 가속 25<br><br>　　　　　　　　흐름: 피해를 입은 챔피언이 3초 내에 처치되면 궁극기 총 재사용 대기시간의 25%를 돌려받습니다.</div></div>";

}

function setItem4_52(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/스테락의도전.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3053.png'></div><div id='item_info' style='float:left;'><b><br><br>　스테락의 도전</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3000</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 50<br>　　　　　　　　체력 400<br><br>　　　　　　　　피의 갈망: 챔피언에게 피해를 입히거나 받으면 중첩을 1회 얻어 6초 동안 최대 <br>　　　　　　　　체력의 2% | 원거리 챔피언의 경우 최대 체력의 1.2%만큼 회복합니다. 중첩 2회부터는 회복량이 50% 감소합니다.<br>　　　　　　　　생명선: 체력이 30% 밑으로 떨어질 만큼 피해를 입으면 4초 동안 100+피의 갈망 중첩당 (최대 체력의 8% | 원거리 챔피언의<br>　　　　　　　　경우 최대 체력의 4.8%)에 해당하는 피해를 흡수하는 보호막을 얻습니다. (재사용 대기시간 60초)<br><br>　　　　　　　　피의 갈망은 챔피언당 하나씩 최대 5회까지 중첩되며 원거리 챔피언의 경우 회복량 및 추가 보호막 흡수량이 60%로 <br>　　　　　　　　감소합니다.</div></div>";

}

function setItem4_53(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/칠흑의양날도끼.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3071.png'></div><div id='item_info' style='float:left;'><b><br><br>　칠흑의 양날 도끼</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40<br>　　　　　　　　체력 450<br>　　　　　　　　스킬 가속 25<br><br>　　　　　　　　깎아내기: 챔피언에게 물리 피해를 가하면 6초 동안 방어력을 5% 감소시키는 중첩을 1회 적용합니다. (최대 방어력 30% 감소)<br>　　　　　　　　분노: 챔피언에게 물리 피해를 가하면 2초 동안 적용된 깎아내기 중첩 하나당 이동 속도가 3 상승합니다.</div></div>";

}

function setItem4_54(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/마법사의최후.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3091.png'></div><div id='item_info' style='float:left;'><b><br><br>　마법사의 최후</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40<br>　　　　　　　　공격 속도 40%<br>　　　　　　　　마법 저항력 50<br><br>　　　　　　　　난투: 기본 공격 시 15~80(레벨에 비례)의 마법 피해(적중 시 )를 입히고 2초 동안 이동 속도가 20 상승합니다.</div></div>";

}

function setItem4_55(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/죽음의무도.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6333.png'></div><div id='item_info' style='float:left;'><b><br><br>　죽음의 무도</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　방어력 45<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　고통 무시: 자신이 받은 물리 피해의 35%(원거리 챔피언의 경우 15%)를 3초 동안 나누어 입습니다.<br>　　　　　　　　반항: 챔피언 처치 관여 시 고통 무시 의 지속 피해 효과가 사라지고 2초 동안 최대 체력의 15%를 회복합니다.</div></div>";

}

function setItem4_56(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/몰락한왕의검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3153.png'></div><div id='item_info' style='float:left;'><b><br><br>　몰락한 왕의 검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 40<br>　　　　　　　　공격 속도 25%<br>　　　　　　　　생명력 흡수 10%<br><br>　　　　　　　　안개의 검: 기본 공격 시 근접 챔피언의 경우 대상 현재 체력의 10%(원거리 챔피언의 경우 6%)에 해당하는 <br>　　　　　　　　물리 피해(적중 시 )를 입힙니다.<br>　　　　　　　　흡수: 챔피언에게 3회 기본 공격을 가하면 40~150(레벨에 비례)의 마법 피해를 입히고 2초 동안 이동 속도를 25% 훔칩니다.<br>　　　　　　　　(재사용 대기시간 20초)<br><br>　　　　　　　　안개의 검은 몬스터 및 미니언에게 최대 60의 피해를 입힙니다.<br>　　　　　　　　아이템 성능은 근접 챔피언과 원거리 챔피언에게 각각 다르게 적용됩니다.</div></div>";

}

function setItem4_57(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/가고일돌갑옷.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3193.png'></div><div id='item_info' style='float:left;'><b><br><br>　가고일 돌갑옷</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　방어력 60<br>　　　　　　　　마법 저항력 60<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　사용 시 - 불굴: 2.5초 동안 크기가 25% 커지며 100+추가 체력의 100%에 해당하는 피해를 흡수하는 보호막을 얻습니다. <br>　　　　　　　　(재사용 대기시간 90초)<br><br>　　　　　　　　구축: 챔피언에게 피해를 받으면 중첩을 1회 얻어 6초 동안 5%의 추가 방어력과 5%의 추가 마법 저항력을 얻습니다.<br><br>　　　　　　　　챔피언당 하나씩 최대 5회까지 중첩됩니다.</div></div>";

}

function setItem4_58(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/세릴다의원한.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6694.png'></div><div id='item_info' style='float:left;'><b><br><br>　세릴다의 원한</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 45<br>　　　　　　　　방어구 관통력 30%<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　매서운 추위: 스킬로 적에게 피해를 입히면 1초 동안 30% 둔화시킵니다.</div></div>";

}

function setItem4_59(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/굶주린히드라.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3074.png'></div><div id='item_info' style='float:left;'><b><br><br>　굶주린 히드라</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 65<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　모든 피해 흡혈 10%<br><br>　　　　　　　　쪼개기: 기본 공격과 스킬 적중 시 대상 주변 적들에게 공격력의 60%에 해당하는 물리 피해를 입힙니다.<br><br>　　　　　　　　범위 끝의 유닛들은 공격력의 12%에 해당하는 피해만 입으며, 기본 공격 또는 스킬당 하나의 대상에게만 발동됩니다. 지속 <br>　　　　　　　　피해에는 발동되지 않습니다.<br>　　　　　　　　구조물에는 쪼개기가 발동되지 않습니다.</div></div>";

}

function setItem4_60(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/거대한히드라.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3748.png'></div><div id='item_info' style='float:left;'><b><br><br>　거대한 히드라</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 30<br>　　　　　　　　체력 500<br><br>　　　　　　　　파괴전차: 공격력을 추가 체력의 2%만큼 추가로 얻습니다.<br>　　　　　　　　쪼개기: 기본 공격 시 5+최대 체력의 1.5%에 해당하는 물리 피해(적중 시 )를 추가로 입히고, 충격파를 발산해 대상 뒤의<br>　　　　　　　　적들에게 40+최대 체력의 3%에 해당하는 물리 피해를 입힙니다.<br><br>　　　　　　　　원거리 챔피언은 75%의 피해를 입힙니다. 적중 시 효과는 구조물에도 피해를 입힙니다.<br>　　　　　　　　구조물에는 쪼개기의 충격파가 발동되지 않습니다.</div></div>";

}

function setItem4_61(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/무한의대검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3031.png'></div><div id='item_info' style='float:left;'><b><br><br>　무한의 대검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 70<br>　　　　　　　　치명타 확률 20%<br><br>　　　　　　　　완벽: 치명타 확률이 60% 이상일 경우 치명타 피해량이 35% 증가합니다.</div></div>";

}

function setItem4_62(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/피바라기.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3072.png'></div><div id='item_info' style='float:left;'><b><br><br>　피바라기</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　생명력 흡수 20%<br><br>　　　　　　　　영액의 보호막: 기본 공격으로 최대 체력 이상 생명력 흡수가 가능합니다. 체력 회복 초과분은 50~350(레벨에 비례)의 피해를<br>　　　　　　　　흡수하는 보호막으로 전환되며 25초간 피해를 주거나 입지 않으면 서서히 사라집니다.</div></div>";

}

function setItem4_63(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/나보리신속검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6675.png'></div><div id='item_info' style='float:left;'><b><br><br>　나보리 신속검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 60<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　스킬 가속 30<br><br>　　　　　　　　날쌘 타격: 기본 공격이 치명타로 적중하면 기본 스킬의 남은 재사용 대기시간이 20% 감소합니다.</div></div>";

}

function setItem4_64(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/라바돈의죽음모자.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3089.png'></div><div id='item_info' style='float:left;'><b><br><br>　라바돈의 죽음모자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 120<br><br>　　　　　　　　신비한 작품: 총 주문력이 35% 증가합니다.</div></div>";

}



//신화급25개
function setItem5_1(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/슈렐리아의군가.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/2065.png'></div><div id='item_info' style='float:left;'><b><br><br>　슈렐리아의 군가</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3600</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 40<br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　사용 시 - 고무: 주변 아군의 이동 속도를 4초 동안 30% 부여합니다. (재사용 대기시간 75초 ).<br><br>　　　　　　　　동기 부여: 다른 아군 챔피언을 강화하거나 보호하면 둘 다 1.5초 동안 이동 속도가 25% 증가합니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 스킬 가속 5<br><br>　　　　　　　　아군은 4초에 한 번씩만 동기 부여 효과를 받을 수 있습니다.</div></div>";

}

function setItem5_2(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/저녁갑주.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3001.png'></div><div id='item_info' style='float:left;'><b><br><br>　저녁갑주</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　방어력 30<br>　　　　　　　　마법 저항력 30<br><br>　　　　　　　　광휘: 챔피언을 이동 불가 상태로 만들거나 자신이 이동 불가 상태가 되면 5초 동안 대상과 주변 적 챔피언들이 받는 피해가<br>　　　　　　　　12% 증가합니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 방어력 및 마법 저항력 5</div></div>";

}

function setItem5_3(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/강철의솔라리펜던트.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3190.png'></div><div id='item_info' style='float:left;'><b><br><br>　강철의 솔라리 펜던트</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　방어력 30<br>　　　　　　　　마법 저항력 30<br><br>　　　　　　　　사용 시 - 헌신: 주변 아군들에게 230~385(아군 레벨에 비례)의 피해를 흡수하는 보호막을 부여합니다. 보호막 피해 흡수량은<br>　　　　　　　　2.5초에 걸쳐 점차 감소합니다. (재사용 대기시간 90초)<br><br>　　　　　　　　전념: 주변 아군들에게 5의 방어력과 마법 저항력을 부여합니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 전념으로 방어력 및 마법 저항력 2 증가<br><br>　　　　　　　　레벨 비례 효과는 아군의 레벨에 따라 상승합니다.<br>　　　　　　　　20초 안에 헌신 보호막을 연속으로 사용하면 25%의 효과만 적용됩니다.</div></div>";

}

function setItem5_4(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/제국의명령.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4005.png'></div><div id='item_info' style='float:left;'><b><br><br>　제국의 명령</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 40<br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　합동 공격: 챔피언을 스킬로 둔화 또는 이동 불가 상태로 만들면 45~75(레벨에 비례)의 추가 마법 피해를 입히고 4초 동안<br>　　　　　　　　표식을 남깁니다. (챔피언 하나당 재사용 대기시간 6초) 아군이 대상에게 피해를 입히면 표식이 폭발하며 90~150<br>　　　　　　　　(아군 레벨에 비례)의 마법 피해를 추가로 가하고 2초 동안 자신과 아군의 이동 속도가 20% 상승합니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 주문력 15<br><br>　　　　　　　　레벨 비례 효과는 아군의 레벨에 따라 상승합니다.</div></div>";

}

function setItem5_5(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/월석재생기.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6617.png'></div><div id='item_info' style='float:left;'><b><br><br>　월석 재생기</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 40<br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　기본 마나 재생 100%<br><br>　　　　　　　　별빛 은총: 전투에서 챔피언에게 기본 공격을 하거나 스킬을 사용하면 주변에서 가장 많은 피해를 입은 아군의 체력을 70 <br>　　　　　　　　회복시킵니다. (재사용 대기시간 2초) 챔피언과 전투에 돌입하고 매초가 지날 때마다 체력 회복과 보호막 효과가 7%씩 <br>　　　　　　　　증가합니다. (최대 5회까지 중첩)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 별빛 은총 체력 회복량 증가 10</div></div>";

}

function setItem5_6(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/부서진여왕의왕관.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4644.png'></div><div id='item_info' style='float:left;'><b><br><br>　부서진 여왕의 왕관</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2500</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 70<br>　　　　　　　　체력 250<br>　　　　　　　　마나 600<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　신성한 보호: 보호를 받아 챔피언으로부터 받는 피해가 75% 감소합니다. 보호 효과는 챔피언에게 피해를 받은 후 1.5초<br>　　　　　　　　동안 지속됩니다. (재사용 대기시간 40초)<br>　　　　　　　　신의 선물: 보호 상태일 때와 보호 효과가 끝난 뒤 3초 동안 10~40의 주문력을 얻습니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 이동 속도가 1%, 주문력이 8 증가합니다.</div></div>";

}

function setItem5_7(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/만년서리.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6656.png'></div><div id='item_info' style='float:left;'><b><br><br>　만년서리</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 70<br>　　　　　　　　체력 250<br>　　　　　　　　마나 600<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　사용 시 - 빙결: 원뿔 범위 내의 적들에게 100+주문력의 30%에 해당하는 마법 피해를 입히고 1.5초 동안 65% 둔화시킵니다.<br>　　　　　　　　범위 중앙의 적들은 속박됩니다. (재사용 대기시간 30초)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 주문력 10</div></div>";

}

function setItem5_8(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/서리불꽃건틀릿.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6662.png'></div><div id='item_info' style='float:left;'><b><br><br>　서리불꽃 건틀릿</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 350<br>　　　　　　　　방어력 25<br>　　　　　　　　마법 저항력 25<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　불사르기: 피해를 받거나 입히면 주변 적들에게 3초 동안 초당 12+추가 체력의 1%에 해당하는 마법 피해를 입힙니다. <br>　　　　　　　　(미니언 대상 25%, 몬스터 대상 150% 증가)<br>　　　　　　　　고립: 기본 공격 시 1.5초 동안 서리 영역을 생성하고 추가 마법 피해(근접 챔피언의 경우 20~100+최대 체력의 0.5%, 원거리<br>　　　　　　　　챔피언의 경우 10~50+최대 체력의 0.25%)를 입힙니다. (재사용 대기시간 4초, 원거리 챔피언의 경우 6초) 서리 영역을 지나는<br>　　　　　　　　적들은 근접 챔피언의 경우 25%, 원거리 챔피언의 경우 12.5% 둔화됩니다. (자신의 최대 체력에 비례)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 체력 100 및 챔피언 크기 6%</div></div>";

}

function setItem5_9(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/터보화공탱크.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6664.png'></div><div id='item_info' style='float:left;'><b><br><br>　터보 화공 탱크</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 350<br>　　　　　　　　방어력 25<br>　　　　　　　　마법 저항력 25<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　사용 시 - 고속 충전 완료: 4초 동안 적이나 적 포탑 쪽으로 이동할 때 이동 속도가 40% 상승합니다. 적에게 근접하거나 4초가<br>　　　　　　　　지나면 충격파를 발산하여 1.5초 동안 주변 적 챔피언들을 50% 둔화시킵니다. (재사용 대기시간 90초)<br><br>　　　　　　　　연료 재충전: 이동하거나 피해를 입히면 화공 탱크가 차오릅니다. 100까지 중첩되면 다음 기본 공격이 주변 모든 적에게<br>　　　　　　　　40~120(+최대 체력의 1%, +이동 속도의 3%)의 마법 피해(미니언 대상 25%, 정글 몬스터 대상 175% 증가)를 입힙니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 스킬 가속 5 및 체력 50</div></div>";

}

function setItem5_10(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/드락사르의황혼검.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6691.png'></div><div id='item_info' style='float:left;'><b><br><br>　드락사르의 황혼검</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 2800</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 60<br>　　　　　　　　물리 관통력 18<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　밤의 추적자: 챔피언에게 기본 공격 시 물리 피해(근접 챔피언의 경우 75+추가 공격력의 30%, 원거리 챔피언의 경우 <br>　　　　　　　　55+추가 공격력의 25%)를 추가로 입힙니다. (재사용 대기시간 15초) 또한 근접 챔피언의 경우 대상을 0.25초 동안 99%<br>　　　　　　　　둔화시킵니다. 피해를 입은 챔피언이 3초 내에 처치되면 재사용 대기시간이 초기화되며 1.5초 동안 투명 상태가 됩니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 스킬 가속 5</div></div>";

}

function setItem5_11(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/월식.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6692.png'></div><div id='item_info' style='float:left;'><b><br><br>　월식</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　물리 관통력 18<br>　　　　　　　　모든 피해 흡혈 8%<br><br>　　　　　　　　늘 떠오르는 달: 1.5초 내에 한 챔피언에게 별개의 기본 공격이나 스킬로 2회 공격하면 대상 최대 체력의 6%에 해당하는 물리<br>　　　　　　　　피해를 추가로 입히고 2초 동안 이동 속도가 15% 상승하며 180+추가 공격력의 40%에 해당하는 피해를 흡수하는 보호막<br>　　　　　　　　(원거리 챔피언의 경우 50%에 해당하는 피해를 흡수하는 보호막)을 얻습니다. <br>　　　　　　　　(재사용 대기시간 6초, 원거리 챔피언의 경우 재사용 대기시간 16초)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 방어구 관통력 4%</div></div>";

}

function setItem5_12(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/자객의발톱.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6693.png'></div><div id='item_info' style='float:left;'><b><br><br>　자객의 발톱</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 60<br>　　　　　　　　물리 관통력 18<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　사용 시 - 모래 일격: 지정한 적 챔피언을 관통해 돌진하며 75+추가 공격력의 30%에 해당하는 물리 피해를 입히고 3초 동안<br>　　　　　　　　대상에게 입히는 피해량이 15% 증가합니다. (재사용 대기시간 90초)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 물리 관통력 5</div></div>";

}

function setItem5_13(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/태양불꽃방패.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3068.png'></div><div id='item_info' style='float:left;'><b><br><br>　태양불꽃 방패</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3100</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　체력 350<br>　　　　　　　　방어력 35<br>　　　　　　　　마법 저항력 35<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　불사르기: 피해를 받거나 입히면 주변 적들에게 3초 동안 초당 20~40(레벨에 비례)+추가 체력의 1%에 해당하는 마법 피해를<br>　　　　　　　　입힙니다. (미니언 대상 25%, 몬스터 대상 150% 증가) 챔피언이나 에픽 몬스터에게 이 효과로 피해를 입히면 중첩이 1회 쌓여<br>　　　　　　　　다음 불사르기 피해량이 5초 동안 12% 증가합니다. (최대 6회 중첩)<br>　　　　　　　　불의 손길: 불사르기 중첩이 최대가 되면 기본 공격 시 주변 적들을 불태워 3초 동안 불사르기 피해를 입힙니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 강인함 및 둔화 저항 5% 및 체력 50</div></div>";

}

function setItem5_14(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/마법공학로켓벨트.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3152.png'></div><div id='item_info' style='float:left;'><b><br><br>　마법공학 로켓 벨트</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 90<br>　　　　　　　　마법 관통력 6<br>　　　　　　　　체력 250<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　사용 시 - 마공학 탄환: 지정 방향으로 돌진하며 부채꼴 모양으로 125+주문력의 15%에 해당하는 마법 피해를 입히는 마법 <br>　　　　　　　　탄환을 발사합니다. 그리고 1.5초 동안 적 챔피언 방향으로 이동할 때 이동 속도가 30% 상승합니다. <br>　　　　　　　　(재사용 대기시간 40초)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 마법 관통력 5<br><br>　　　　　　　　초음속 돌진으로 지형은 통과할 수 없습니다.</div></div>";

}

function setItem5_15(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/균열생성기.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4633.png'></div><div id='item_info' style='float:left;'><b><br><br>　균열 생성기</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'>3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 80<br>　　　　　　　　체력 300<br>　　　　　　　　스킬 가속 15<br>　　　　　　　　모든 피해 흡혈 8%<br><br>　　　　　　　　공허의 부패: 적 챔피언에게 피해를 입힐 시 매초 3%의 추가 피해(최대 9%)를 입힙니다. 피해량이 최대가 되면 추가 피해량을<br>　　　　　　　　고정 피해로 전환합니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 모든 피해 흡혈 2% 및 주문력 8</div></div>";

}

function setItem5_16(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/밤의수확자.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/4636.png'></div><div id='item_info' style='float:left;'><b><br><br>　밤의 수확자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 90<br>　　　　　　　　체력 300<br>　　　　　　　　스킬 가속 15<br><br>　　　　　　　　영혼 찢기: 챔피언에게 피해를 입히면 125+주문력의 15%에 해당하는 마법 피해를 추가로 입히고 1.5초 동안 이동 속도가 25%<br>　　　　　　　　상승합니다. (챔피언당 재사용 대기시간 40초)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 스킬 가속 5<br><br>　　　　　　　　다른 챔피언에게 피해를 입히면 이동 속도 추가 효과의 지속시간이 늘어납니다.</div></div>";

}

function setItem5_17(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/리안드리의고뇌.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6653.png'></div><div id='item_info' style='float:left;'><b><br><br>　리안드리의 고뇌</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 80<br>　　　　　　　　마나 600<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　고뇌: 대상의 추가 체력에 비례해 챔피언에게 최대 12%의 추가 마법 피해를 입힙니다. (추가 체력이 1250일 때 최대 피해)<br><br>　　　　　　　　고통: 스킬로 피해를 입히면 4초 동안 적을 불태워 매초 15+주문력의 1.5%+최대 체력의 1%에 해당하는 마법 피해를 <br>　　　　　　　　입힙니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 스킬 가속 5</div></div>";

}

function setItem5_18(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/루덴의메아리.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6655.png'></div><div id='item_info' style='float:left;'><b><br><br>　루덴의 메아리</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　주문력 80<br>　　　　　　　　마법 관통력 6<br>　　　　　　　　마나 600<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　메아리: 스킬로 피해를 입히면 대상과 주변 3명의 적에게 100+주문력의 10%에 해당하는 마법 피해를 추가로 입히고 2초 동안<br>　　　　　　　　이동 속도가 15% 상승합니다. (재사용 대기시간 10초) 챔피언에게 스킬 피해를 입히면 이 아이템의 재사용 대기시간이 0.5초<br>　　　　　　　　감소합니다.(스킬 사용 1회당 최대 3초 감소)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 마법 관통력 5</div></div>";

}

function setItem5_19(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/선혈포식자.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6630.png'></div><div id='item_info' style='float:left;'><b><br><br>　선혈포식자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3200</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 45<br>　　　　　　　　체력 450<br>　　　　　　　　스킬 가속 20<br>　　　　　　　　모든 피해 흡혈 10%<br><br>　　　　　　　　사용 시 - 갈망의 가르기: 주변 적들에게 기본 공격력의 175%에 해당하는 물리 피해를 입힙니다. 적중한 챔피언 하나당 기본<br>　　　　　　　　공격력의 25%+잃은 체력의 10%만큼 회복합니다. (재사용 대기시간 15초, 스킬 가속에 따라 감소)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 스킬 가속 5</div></div>";

}

function setItem5_20(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/발걸음분쇄기.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6631.png'></div><div id='item_info' style='float:left;'><b><br><br>　발걸음 분쇄기</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 50<br>　　　　　　　　공격 속도 20%<br>　　　　　　　　체력 300<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　사용 시 - 제압의 가르기: 주변 적들에게 공격력의 175%에 해당하는 물리 피해를 입히고 3초 동안 40% 둔화시킵니다. <br>　　　　　　　　(재사용 대기시간 15초, 스킬 가속에 따라 감소) 이동하면서 사용할 수 있습니다.<br><br>　　　　　　　　비장한 걸음: 물리 피해를 가하면 3초 동안 이동 속도가 20 상승합니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 이동 속도 2%</div></div>";

}

function setItem5_21(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/신성한파괴자.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6632.png'></div><div id='item_info' style='float:left;'><b><br><br>　신성한 파괴자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 35<br>　　　　　　　　체력 400<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　주문 검: 스킬을 사용하고 나면 다음 기본 공격 시 대상 최대 체력의 12%(소유자가 원거리 챔피언인 경우 9%)에 해당하는 <br>　　　　　　　　물리 피해(적중 시 )를 추가로 입힙니다. (재사용 대기시간 1.5초) 대상이 챔피언일 경우 강화된 피해의 65%만큼 체력을 <br>　　　　　　　　회복합니다. (소유자가 원거리 챔피언인 경우 40%)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 방어구 관통력 5% 및 마법 관통력 5%<br><br>　　　　　　　　주문 검은 유닛에게 최소 기본 공격력의 150%에 해당하는 피해를 입히고 몬스터에게는 최대 기본 공격력의 250%에 해당하는<br>　　　　　　　　피해를 입힙니다.</div></div>";

}

function setItem5_22(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/삼위일체.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3078.png'></div><div id='item_info' style='float:left;'><b><br><br>　삼위일체</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3300</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 35<br>　　　　　　　　공격 속도 30%<br>　　　　　　　　체력 200<br>　　　　　　　　스킬 가속 20<br><br>　　　　　　　　삼중 공격: 기본 공격 시 3초 동안 이동 속도가 20 상승합니다. 대상이 챔피언이면 추가로 3초 동안 기본 공격력이 6% <br>　　　　　　　　증가하며, 최대 5회 중첩됩니다. (최대 추가 공격력: 30%)<br>　　　　　　　　주문 검: 스킬을 사용하고 나면 다음 기본 공격 시 기본 공격력의 200%에 해당하는 물리 피해(적중 시 )를 추가로 입힙니다. <br>　　　　　　　　(재사용 대기시간 1.5초)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 공격력 3, 스킬 가속 3, 이동 속도 3</div></div>";

}

function setItem5_23(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/돌풍.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6671.png'></div><div id='item_info' style='float:left;'><b><br><br>　돌풍</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3333</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 60<br>　　　　　　　　공격 속도 20%<br>　　　　　　　　치명타 확률 20%<br><br>　　　　　　　　사용 시 - 폭우: 지정 방향으로 돌진하며 착지 지점 주변 체력이 가장 낮은 적(챔피언 우선)에게 발사체 3개를 날립니다. <br>　　　　　　　　총 180~220(레벨에 비례)+추가 공격력의 45%에 해당하는 마법 피해를 입히며 체력이 낮을수록 피해량이 최대 50%까지 <br>　　　　　　　　증가합니다. (재사용 대기시간 90초)<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 이동 속도 2%<br><br>　　　　　　　　미사일의 최대 피해는 체력이 30% 이하인 적에게 적용됩니다.<br>　　　　　　　　폭우 돌진으로 지형은 통과할 수 없습니다.</div></div>";

}

function setItem5_24(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/크라켄학살자.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6672.png'></div><div id='item_info' style='float:left;'><b><br><br>　크라켄 학살자</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 65<br>　　　　　　　　공격 속도 25%<br>　　　　　　　　치명타 확률 20%<br><br>　　　　　　　　벼락: 세 번째 기본 공격을 가할 때마다 60+추가 공격력의 45%에 해당하는 고정 피해를 추가로 입힙니다.<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 공격 속도 10%</div></div>";

}

function setItem5_25(){
	const element1 = document.getElementById('item_bulid_list_item');
	element1.innerHTML = "<li id='item_bulid_list_item'><br>　　　　　　　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'>　　<img src='./img/main_4/blank.png'></li>";
	
	//루트0개(591 178) 루트1개(483 245) 루트2개(492 342)
	const element2 = document.getElementById('item_recipe_img');
	element2.innerHTML = "<div id='item_recipe_img'><br>　　　　　　　　　　　　　　　　<img src='./img/main_4/불멸의철갑궁.png' width='492px' height='342px'></div>";

	const element3 = document.getElementById('item_recipe_detail');
	element3.innerHTML = "<div id='item_recipe_detail'><div id='item_img' style='float:left;'><br><br>　　　　　　　　<img src='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/6673.png'></div><div id='item_info' style='float:left;'><b><br><br>　불멸의 철갑궁</b><br><br><span style='color:orange'>　<img src='./img/main_4/Gold.png' width='15px' height='15px'> 3400</span></div><div id='item_detail_contents'><br><br><br><br><br><br><br>　　　　　　　　공격력 55<br>　　　　　　　　공격 속도 20%<br>　　　　　　　　치명타 확률 20%<br>　　　　　　　　생명력 흡수 10%<br><br>　　　　　　　　생명선: 피해를 받아 체력이 30% 아래로 떨어질 경우 3초 동안 250~700의 피해를 흡수하는 보호막을 얻습니다. 또한 8초 <br>　　　　　　　　동안 공격력이 15~35 증가합니다. (90초 )<br><br>　　　　　　　　신화급 기본 지속 효과: 다른 모든 전설급 아이템에 공격력 5 및 체력 50</div></div>";

}