<template>
  <v-card elevation="24" rounded="xl" class="mb-6 mt-6">
    <v-card-text>

  <div class="text-center">
    <div>
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="cell"
          @click="play(rowIndex, colIndex)"
        >
          {{ cell }}
        </div>
      </div>
    </div>
    <p class="text-h4 text-indigo" v-if="winner">{{ winner }} wins!</p>
    <p class="text-h4 text-indigo" v-else-if="tie">It's a tie!</p>
  <v-btn @click="reset()" color="red" rounded="lg" class="mt-4 mb-4" size="small">Reset</v-btn>
  </div>
    </v-card-text>
  </v-card>



</template>

<script setup>
import { reactive, watch, ref } from 'vue';

    const board = reactive([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    let currentPlayer = 'X';
    let winner = ref(null);
    let tie = false;

    const play = (rowIndex, colIndex) => {
      if (board[rowIndex][colIndex] === '') {
        board[rowIndex][colIndex] = currentPlayer;
        checkGameStatus();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    };

    const checkGameStatus = () => {
      checkRows();
      checkColumns();
      checkDiagonals();
      checkTie();
    };

    const checkRows = () => {
      for (let row of board) {
        if (row[0] === row[1] && row[1] === row[2] && row[0] !== '') {
          winner.value = row[0];
        }
      }
    };

    const checkColumns = () => {
      for (let i = 0; i < 3; i++) {
        if (
          board[0][i] === board[1][i] &&
          board[1][i] === board[2][i] &&
          board[0][i] !== ''
        ) {
          winner.value = board[0][i];
        }
      }
    };

    const checkDiagonals = () => {
      if (
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] !== ''
      ) {
        winner.value = board[0][0];
      } else if (
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[0][2] !== ''
      ) {
        winner.value = board[0][2];
      }
    };

    const checkTie = () => {
      let usedCells = 0;
      for (let row of board) {
        usedCells += row.filter(cell => cell !== '').length;
      }
      tie = usedCells === 9 && !winner.value;
    };

    // watch(() => winner.value, () => {
    //   if (winner.value) {
    //     alert(`${winner.value} wins!`);
    //   } else if (tie) {
    //     alert(`It's a tie!`);
    //   }
    // });

const reset = () => {
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      board[i][j] = '';
    });
  });
  winner.value = ""
}

</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
border: 1px solid #333;
  font-size: 3rem;
}
</style>
